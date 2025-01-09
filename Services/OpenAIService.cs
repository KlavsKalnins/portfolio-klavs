
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
#pragma warning disable SKEXP0010


public class QAPair
{
    public string Question { get; set; }
    public string Answer { get; set; }
}

public class AIResponse
{
    public string Question { get; set; } = string.Empty;
    public string Answer { get; set; } = string.Empty;
    public string Hint { get; set; } = string.Empty;
    public string Similarity { get; set; } = string.Empty;
    public int MatchedIndex { get; set; } = -1;
}

public class OpenAIService : IOpenAIService
{
    private readonly IConfiguration _configuration;
    private readonly Kernel _kernel;
    private readonly OpenAITextEmbeddingGenerationService _embeddingGen;

    private IList<ReadOnlyMemory<float>>? _questionEmbeddings;

    private static readonly (string question, string answer, string hint)[] _questionAnswerPairs = new (string question, string answer, string hint)[]
        {
            ("Guitar", "The first music instrument i picked up was a guitar. And the first song I played was Something from nothing by foo fighters!", "The music instrument has strings!"),
            ("Mazda", "my favorite car brand is Mazda.", "Car brand"),
            ("Where did I go to school", "I went to school at Oskara Kalpaka Rīgas Tautas daiļamata pamatskola, I studied Art. Later on I went to Riga Tehnical College to study computer sience.", ""),
            ("Favorite Color Orange", "My favorite color is orange", "It's warm and bright as the sun!"),
            ("Whats your favorite programming language", "My favorite programming language is C#", "I do code, why not ask about that!"),
            ("Whats your favorite game of all time?", "Probably GTA or Minecraft", "im a gaimer aswell"),
            ("What game are you currently playing?", "Boulders gate 3, and its a masterpiece!", "im currently playing something"),
            ("whats your favorite animal?", "I like dogs and i dont discriminate any animal","i like creatures that are on this earth"),
            ("Whats your favorite candybar?", "Kit KatChunky Peanut butter","snack!"),
            // ("", "",""),
        };

    // private static readonly List<QAPair> _questionAnswerPairss = new List<QAPair>
    // {
    //     new() { Question = "I like to play Guitar", Answer = "The first music instrument i picked up was a guitar. And the first song I played was Something from nothing by foo fighters!" },
    //     new() { Question = "Where did I go to school", Answer = "I went to school at Oskara Kalpaka Rīgas Tautas daiļamata pamatskola, I studied Art. Later on I went to Riga Tehnical College to study computer sience." },
    //     new() { Question = "Whats your favorite color", Answer = "My favorite color is orange" },
    //     new() { Question = "Do you have a favorite car brand?", Answer = "my favorite card brand is probably Mazda." },
    //     new() { Question = "Whats your favorite programming language", Answer = "My favorite programming language is C" },
    //     new() { Question = "Whats your favorite game of all time?", Answer = "Probably GTA or Minecraft" },
    //     new() { Question = "What game are you currently playing?", Answer = "Boulders gate 3, and its a masterpiece!" },
    //     new() { Question = "Whats your political standing", Answer = "... the left bottom box :D" },
    //     new() { Question = "", Answer = "" },
    // };

    public OpenAIService(IConfiguration configuration)
    {
        _configuration = configuration;

        string apikey = _configuration["AI:OpenAI:APIKey"]!;
        _kernel = Kernel.CreateBuilder()
            .AddOpenAIChatCompletion("gpt-3.5-turbo-0125", apikey)
            .Build();
#pragma warning disable SKEXP0010
        _embeddingGen = new OpenAITextEmbeddingGenerationService("text-embedding-3-small", apikey);
#pragma warning restore SKEXP0010
        GenerateEmbeddingsAsync();
    }

    private async Task GenerateEmbeddingsAsync()
    {
        _questionEmbeddings = await _embeddingGen.GenerateEmbeddingsAsync(_questionAnswerPairs.Select(qap => qap.question).ToArray());
    }

    public async Task<AIResponse> GetOpenAIResponse(string input, int? foundMatchesIndex = null)
    {
        float similarityThreshold = 0.5f;
        float levelSimilarityThreshold = 0.6f;

        var arguments = new KernelArguments();

        while (true)
        {
            Console.Write("Question: ");
            arguments["input"] = input;

            var inputEmbedding = (await _embeddingGen.GenerateEmbeddingsAsync(new[] { input }))[0];
            float[] similarity = _questionEmbeddings.Select(e => TensorPrimitives.CosineSimilarity(e.Span, inputEmbedding.Span)).ToArray();
            float maxSimilarity = similarity.Max();
            int bestMatchIndex = similarity.ToList().IndexOf(maxSimilarity);

            if (maxSimilarity < similarityThreshold)
            {
                // lets get the Hint of one _questionEmbeddings that is not the index of: foundMatchesIndex
                var hintIndex = _questionAnswerPairs.Select((qap, index) => (qap, index)).Where(qap => qap.index != foundMatchesIndex).First().index;
                Console.WriteLine(hintIndex);
                // how can i get the hint index text
                string hint = _questionAnswerPairs[hintIndex].hint;
                Console.WriteLine(hint);
                return new AIResponse
                {
                    Question = "I dont have memory fragments of this",
                    Answer = "I dont have memory fragments of this",
                    Hint = hint,
                };
            }
            else
            {
                string bestMatchAnswer = _questionAnswerPairs[bestMatchIndex].answer;
                Console.WriteLine($"Answer: {similarity[bestMatchIndex]:F6} = {bestMatchAnswer}");

                var bestMatch = _questionAnswerPairs[bestMatchIndex];

                return new AIResponse
                {
                    Question = bestMatch.question,
                    Answer = bestMatch.answer,
                    Hint = bestMatch.hint,
                    MatchedIndex = bestMatchIndex,
                    Similarity = $"{similarity[bestMatchIndex]:F6}",
                };
                //return await Task.FromResult(bestMatchAnswer);
            }
        }
    }
}
