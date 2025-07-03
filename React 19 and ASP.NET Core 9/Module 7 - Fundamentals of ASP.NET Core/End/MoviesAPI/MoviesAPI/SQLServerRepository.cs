using MoviesAPI.Entities;

namespace MoviesAPI
{
    public class SQLServerRepository : IRepository
    {
        private List<Genre> _genres;

        public SQLServerRepository()
        {
            _genres = new List<Genre>
            {
                new Genre{Id=1, Name = "Comedy SQL"},
                new Genre{Id=2, Name = "Action SQL"}
            };
        }

        public List<Genre> GetAllGenres()
        {
            return _genres;
        }

        public async Task<Genre?> GetById(int id)
        {
            await Task.Delay(TimeSpan.FromSeconds(3));
            return _genres.FirstOrDefault(g => g.Id == id);
        }

        public bool Exists(string name)
        {
            return _genres.Any(g => g.Name == name);
        }

        public void MyMethod()
        {

        }

        public int Create(Genre genre)
        {
            throw new NotImplementedException();
        }
    }
}
