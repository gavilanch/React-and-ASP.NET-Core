namespace MoviesAPI.DTOs
{
    public class LandingDTO
    {
        public List<MovieDTO> InTheaters { get; set; } = new List<MovieDTO>();
        public List<MovieDTO> UpcomingReleases { get; set; } = new List<MovieDTO>();
    }
}
