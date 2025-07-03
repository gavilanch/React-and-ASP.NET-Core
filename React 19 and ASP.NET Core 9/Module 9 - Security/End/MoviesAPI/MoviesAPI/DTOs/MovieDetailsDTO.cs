namespace MoviesAPI.DTOs
{
    public class MovieDetailsDTO: MovieDTO
    {
        public List<GenreDTO> Genres { get; set; } = new List<GenreDTO>();
        public List<TheaterDTO> Theaters { get; set; } = new List<TheaterDTO>();
        public List<MovieActorDTO> Actors { get; set; } = new List<MovieActorDTO>();
    }
}
