using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace MoviesAPI.Entities
{
    public class Movie
    {
        public int Id { get; set; }
        [Required]
        [StringLength(300)]
        public required string Title { get; set; }
        public string? Trailer { get; set; }
        public DateTime ReleaseDate { get; set; }
        [Unicode(false)]
        public string? Poster { get; set; }
        public List<MovieGenre> MoviesGenres { get; set; } = new List<MovieGenre>();
        public List<MovieTheater> MoviesTheaters { get; set; } = new List<MovieTheater>();
        public List<MovieActor> MoviesActors { get; set; } = new List<MovieActor>();
    }
}
