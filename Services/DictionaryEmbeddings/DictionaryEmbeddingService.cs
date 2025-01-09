
namespace klavsDomain.Services;

// https://devblogs.microsoft.com/dotnet/demystifying-retrieval-augmented-generation-with-dotnet/
using Microsoft.SemanticKernel;
using Microsoft.SemanticKernel.Connectors.OpenAI;
using System;
using System.Collections;
using System.Numerics.Tensors;
using System.Net.Http;
using System.Web;
using System.Text.RegularExpressions;
using Microsoft.SemanticKernel.Memory;
using Microsoft.SemanticKernel.Text;
using System.Net;
using System.Text;
using System.Diagnostics;
#pragma warning disable SKEXP0010

public class EmbeddingFileMetadata
{
    public string FilePath { get; set; }
    public string Architecture { get; set; }
    public int Dimensions { get; set; }
    public string UrlFrom { get; set; }
}

public class DictionaryEmbeddingService : IDictionaryEmbeddingService
{
    private readonly string todayWord = "dog";
    private readonly bool IsAvailable = true;
    private static readonly int embeddingFileIndex = 0;
    private static readonly List<EmbeddingFileMetadata> EmbeddingFilesDatas = new List<EmbeddingFileMetadata>
        {
            new EmbeddingFileMetadata{
                FilePath="./wwwroot/embeddings/glove.6B.50d.txt",
                Architecture = "word2vec, skip-gram",
                Dimensions = 50,
                UrlFrom = "https://github.com/3Top/word2vec-api?tab=readme-ov-file",
            },
            new EmbeddingFileMetadata{
                FilePath="./wwwroot/embeddings/glove.6B.300d.txt",
                Architecture = "word2vec, skip-gram",
                Dimensions = 300,
                UrlFrom = "https://github.com/3Top/word2vec-api?tab=readme-ov-file",
            },
            new EmbeddingFileMetadata{
                FilePath="./wwwroot/embeddings/GoogleNews-vectors-negative300.bin",
                Architecture = "word2vec",
                Dimensions = 300,
                UrlFrom = "https://github.com/3Top/word2vec-api?tab=readme-ov-file",
            },
        };

    private IDictionary<string, ReadOnlyMemory<float>> _wordEmbeddings;

    public DictionaryEmbeddingService()
    {
        if (!IsAvailable) return;
        // _configuration = configuration;

        //         string apikey = _configuration["AI:OpenAI:APIKey"]!;
        //         _kernel = Kernel.CreateBuilder()
        //             .AddOpenAIChatCompletion("gpt-3.5-turbo-0125", apikey)
        //             .Build();
        // #pragma warning disable SKEXP0010
        //         _embeddingGen = new OpenAITextEmbeddingGenerationService("text-embedding-3-small", apikey);
        // #pragma warning restore SKEXP0010
        LoadGoogleNewsEmbeddings();
    }

    private IDictionary<string, ReadOnlyMemory<float>> LoadEmbeddingsFromFile(EmbeddingFileMetadata embeddingData)
    {
        var embeddings = new Dictionary<string, ReadOnlyMemory<float>>();

        try
        {
            using (var reader = new StreamReader(embeddingData.FilePath))
            {
                string line;
                while ((line = reader.ReadLine()) != null)
                {
                    var parts = line.Split(' ');
                    var word = parts[0];
                    var vector = new float[embeddingData.Dimensions]; // Assuming 300 dimensions for GloVe vectors
                    for (int i = 0; i < embeddingData.Dimensions; i++)
                    {
                        vector[i] = float.Parse(parts[i + 1]);
                    }
                    embeddings[word] = new ReadOnlyMemory<float>(vector);
                }
            }
        }
        catch (FileNotFoundException ex)
        {
            Console.WriteLine($"File not found: {embeddingData.FilePath}");
            Console.WriteLine(ex.Message);
        }
        catch (UnauthorizedAccessException ex)
        {
            Console.WriteLine($"Access denied to file: {embeddingData.FilePath}");
            Console.WriteLine(ex.Message);
        }
        catch (Exception ex)
        {
            Console.WriteLine($"An error occurred while loading embeddings from file: {embeddingData.FilePath}");
            Console.WriteLine(ex.Message);
        }

        return embeddings;
    }

    public void LoadGoogleNewsEmbeddings()
    {
        var data = EmbeddingFilesDatas[embeddingFileIndex];
        _wordEmbeddings = LoadEmbeddingsFromFile(data);
        // try
        // {
        //     _wordEmbeddings = LoadEmbeddingsFromFile(data);
        // }
        // catch (FileNotFoundException ex)
        // {
        //     Console.WriteLine($"File not found: {data.FilePath}");
        //     Console.WriteLine(ex.Message);
        // }
        // catch (UnauthorizedAccessException ex)
        // {
        //     Console.WriteLine($"Access denied to file: {data.FilePath}");
        //     Console.WriteLine(ex.Message);
        // }
        // catch (Exception ex)
        // {
        //     Console.WriteLine($"An error occurred while loading embeddings from file: {data.FilePath}");
        //     Console.WriteLine(ex.Message);
        // }
    }

    public async Task<string[]> CloseWords(string word, int topN = 20)
    {
        if (!IsAvailable)
        {
            return null;
        }

        if (!_wordEmbeddings.ContainsKey(word))
        {
            throw new ArgumentException($"The word '{word}' is not in the embeddings dictionary.");
        }

        var wordEmbedding = _wordEmbeddings[word].ToArray();
        var similarities = new Dictionary<string, float>();

        foreach (var kvp in _wordEmbeddings)
        {
            if (kvp.Key == word) continue;

            var otherEmbedding = kvp.Value.ToArray();
            float similarity = TensorPrimitives.CosineSimilarity(wordEmbedding, otherEmbedding);
            similarities[kvp.Key] = similarity;
        }

        return similarities.OrderByDescending(kvp => kvp.Value)
                           .Take(topN)
                           .Select(kvp => kvp.Key)
                           .ToArray();
    }

    public class GuessWordResult
    {
        public string Word { get; set; }
        public int Similarity { get; set; }
        public bool DidGuess { get; set; }
    }

    public async Task<GuessWordResult> GuessWord(string guessWord)
    {
        if (!IsAvailable)
        {
            return null;
        }

        if (!_wordEmbeddings.ContainsKey(guessWord))
        {
            throw new ArgumentException($"The word '{guessWord}' is not in the embeddings dictionary.");
        }

        if (guessWord == todayWord)
        {
            return new GuessWordResult
            {
                Word = todayWord,
                Similarity = 0,
                DidGuess = true,
            };
        }

        var wordEmbedding = _wordEmbeddings[todayWord].ToArray();
        var similarities = new Dictionary<string, float>();

        foreach (var kvp in _wordEmbeddings)
        {
            if (kvp.Key == todayWord) continue;

            var otherEmbedding = kvp.Value.ToArray();
            float similarity = TensorPrimitives.CosineSimilarity(wordEmbedding, otherEmbedding);
            similarities[kvp.Key] = similarity;
        }

        var allSimilarities = similarities.OrderByDescending(kvp => kvp.Value)
                           .Select(kvp => kvp.Key)
                           .ToArray();

        int kk = Array.IndexOf(allSimilarities, guessWord) + 1;
        Console.WriteLine($"kk:{kk}");

        var guessWordResult = new GuessWordResult
        {
            Word = guessWord,
            Similarity = kk,
            DidGuess = false,
        };
        return guessWordResult;
    }
}


// https://nlp.stanford.edu/projects/glove/
// https://github.com/stanfordnlp/GloVe