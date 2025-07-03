using MoviesAPI.Entities;

namespace MoviesAPI
{
    public class InMemoryRepository: IRepository
    {
        private List<Genre> _genres;

        public InMemoryRepository()
        {
            _genres = new List<Genre>
            {
                new Genre{Id=1, Name = "Comedy"},
                new Genre{Id=2, Name = "Action"}
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

        public int Create(Genre genre)
        {
            var id = _genres.Max(g => g.Id) + 1;
            genre.Id = id;
            _genres.Add(genre);
            return id;
        }

        //private async Task MyPrivateMethod()
        //{
        //    await Task.Delay(TimeSpan.FromSeconds(3));
        //}
    }
}
