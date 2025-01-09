namespace klavsDomain.Services;

public interface IOpenAIService
{
    Task<AIResponse> GetOpenAIResponse(string request, int? foundMatchesIndex = null);
}
