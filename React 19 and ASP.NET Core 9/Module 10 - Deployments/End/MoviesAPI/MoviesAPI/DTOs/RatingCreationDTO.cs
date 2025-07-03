using System.ComponentModel.DataAnnotations;

namespace MoviesAPI.DTOs
{
    public class RatingCreationDTO
    {
        public int MovieId { get; set; }
        [Range(1, 5)]
        public int Rate { get; set; }
    }
}