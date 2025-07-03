namespace MoviesAPI.Entities
{
    public class MovieGenre
    {
        public int MovieId { get; set; }
        public int GenreId { get; set; }
        public Movie Movie { get; set; } = null!;
        public Genre Genre { get; set; } = null!;
    }
}
