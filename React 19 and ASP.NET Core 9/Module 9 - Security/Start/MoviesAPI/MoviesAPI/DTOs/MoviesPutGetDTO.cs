namespace MoviesAPI.DTOs
{
    public class MoviesPutGetDTO
    {
        public MovieDTO Movie { get; set; } = null!;
        public List<GenreDTO> SelectedGenres { get; set; } = new List<GenreDTO>();
        public List<GenreDTO> NonSelectedGenres { get; set; } = new List<GenreDTO>();
        public List<TheaterDTO> SelectedTheaters { get; set; } = new List<TheaterDTO>();
        public List<TheaterDTO> NonSelectedTheaters { get; set; } = new List<TheaterDTO>();
        public List<MovieActorDTO> Actors { get; set; } = new List<MovieActorDTO>();
    }
}
