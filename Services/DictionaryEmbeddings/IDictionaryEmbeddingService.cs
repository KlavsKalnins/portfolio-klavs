using static klavsDomain.Services.DictionaryEmbeddingService;

namespace klavsDomain.Services;

public interface IDictionaryEmbeddingService
{
    Task<string[]> CloseWords(string word, int topN = 10);
    Task<GuessWordResult> GuessWord(string word);
}
