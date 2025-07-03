namespace MoviesAPI.DTOs
{
    public class MovieActorDTO
    {
        public int Id { get; set; }
        public string Name { get; set; } = null!;
        public string? Picture { get; set; }
        public string Character { get; set; } = null!;
    }
}
