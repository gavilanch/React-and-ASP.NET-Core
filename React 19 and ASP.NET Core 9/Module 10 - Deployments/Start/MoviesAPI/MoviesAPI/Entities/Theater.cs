using MoviesAPI.DTOs;
using NetTopologySuite.Geometries;
using System.ComponentModel.DataAnnotations;

namespace MoviesAPI.Entities
{
    public class Theater : IId
    {
        public int Id { get; set; }
        [Required]
        [StringLength(75)]
        public required string Name { get; set; }
        public required Point Location { get; set; }
    }
}
