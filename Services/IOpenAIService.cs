namespace klavsDomain.Services;

public interface IOpenAIService
{
    Task<string> GetOpenAIResponse(string request);
}
