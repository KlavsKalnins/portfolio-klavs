
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

public class OpenAIService : IOpenAIService
{
    private readonly IConfiguration _configuration;
    private readonly Kernel _kernel;
    private readonly OpenAITextEmbeddingGenerationService _embeddingGen;

    private IList<ReadOnlyMemory<float>>? _questionEmbeddings;

    private static readonly (string question, string answer)[] _questionAnswerPairs = new (string question, string answer)[]
        {
            ("I like to play Guitar", "The first music instrument i picked up was a guitar. And the first song I played was Something from nothing by foo fighters!"),
            ("Where did I go to school", "I went to school at Oskara Kalpaka Rīgas Tautas daiļamata pamatskola, I studied Art. Later on I went to Riga Tehnical College to study computer sience."),
            ("Whats your favorite color", "My favorite color is orange"),
            ("Do you have a favorite car brand?", "my favorite card brand is probably Mazda."),
            ("Whats your favorite programming language", "My favorite programming language is C#"),
            ("Whats your favorite game of all time?", "Probably GTA or Minecraft"),
            ("What game are you currently playing?", "Boulders gate 3, and its a masterpiece!"),
            ("Whats your political standing?", "... the left bottom box :D"),
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

    public async Task<string> GetOpenAIResponse(string input)
    {
        float similarityThreshold = 0.3f;
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
                return await Task.FromResult("Try your luck again!");
            }
            else
            {
                string bestMatchAnswer = _questionAnswerPairs[bestMatchIndex].answer;
                Console.WriteLine($"Answer: {similarity[bestMatchIndex]:F6} = {bestMatchAnswer}");
                return await Task.FromResult(bestMatchAnswer);
            }
        }

        return await Task.FromResult("okay");
    }
}
