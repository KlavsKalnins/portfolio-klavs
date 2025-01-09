namespace klavsDomain.Services;

public interface IMovieReviewService
{
    List<MovieModel>? GetMovies();
    MovieModel? GetMovieById(int id);
}