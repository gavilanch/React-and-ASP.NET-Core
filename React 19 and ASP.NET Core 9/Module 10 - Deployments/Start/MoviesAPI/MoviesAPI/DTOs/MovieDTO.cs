namespace MoviesAPI.DTOs
{
    public class MovieDTO
    {
        public int Id { get; set; }
        public required string Title { get; set; }
        public string? Trailer { get; set; }
        public DateTime ReleaseDate { get; set; }
        public string? Poster { get; set; }
        public double AverageRate { get; set; }
        public int UserVote { get; set; }
    }
}
