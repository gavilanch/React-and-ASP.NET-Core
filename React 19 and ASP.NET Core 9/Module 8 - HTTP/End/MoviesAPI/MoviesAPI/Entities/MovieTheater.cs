namespace MoviesAPI.Entities
{
    public class MovieTheater
    {
        public int MovieId { get; set; }
        public int TheaterId { get; set; }
        public Movie Movie { get; set; } = null!;
        public Theater Theater { get; set; } = null!;
    }
}
