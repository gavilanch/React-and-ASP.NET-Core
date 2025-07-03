using System.ComponentModel.DataAnnotations;

namespace MoviesAPI.DTOs
{
    public class EditClaimDTO
    {
        [Required]
        [EmailAddress]
        public required string Email { get; set; }
    }
}
