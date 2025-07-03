using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.Security.Cryptography;

namespace MoviesAPI.Entities
{
    public class Actor
    {
        public int Id { get; set; }
        [Required]
        [StringLength(150)]
        public required string Name { get; set; }
        public DateTime DateOfBirth { get; set; }
        [Unicode(false)]
        public string? Picture { get; set; }
    }
}
