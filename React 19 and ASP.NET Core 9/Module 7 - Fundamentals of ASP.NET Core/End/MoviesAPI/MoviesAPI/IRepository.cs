using MoviesAPI.Entities;

namespace MoviesAPI
{
    public interface IRepository
    {
        List<Genre> GetAllGenres();
        Task<Genre?> GetById(int id);
        bool Exists(string name);
        int Create(Genre genre);
    }
}
