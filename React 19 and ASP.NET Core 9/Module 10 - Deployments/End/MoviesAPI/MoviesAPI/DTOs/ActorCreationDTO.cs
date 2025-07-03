using System.ComponentModel.DataAnnotations;

namespace MoviesAPI.DTOs
{
    public class ActorCreationDTO
    {
        [Required]
        [StringLength(150)]
        public required string Name { get; set; }
        public DateTime DateOfBirth { get; set; }
        public IFormFile? Picture { get; set; }
    }
}
