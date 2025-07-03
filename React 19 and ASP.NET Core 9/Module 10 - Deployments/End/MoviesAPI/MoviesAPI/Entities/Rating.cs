using Microsoft.AspNetCore.Identity;

namespace MoviesAPI.Entities
{
    public class Rating
    {
        public int Id { get; set; }
        public int Rate { get; set; }
        public int MovieId { get; set; }
        public Movie Movie { get; set; } = null!;
        public required string UserId { get; set; }
        public IdentityUser User { get; set; } = null!;
    }
}
