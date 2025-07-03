using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MoviesAPI.DTOs;
using MoviesAPI.Entities;
using MoviesAPI.Services;

namespace MoviesAPI.Controllers
{
    [ApiController]
    [Route("api/ratings")]
    public class RatingsController : ControllerBase
    {
        private readonly ApplicationDbContext context;
        private readonly IUsersService usersService;

        public RatingsController(ApplicationDbContext context, IUsersService usersService)
        {
            this.context = context;
            this.usersService = usersService;
        }

        [HttpPost]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<IActionResult> Post([FromBody] RatingCreationDTO ratingCreationDTO)
        {
            var movieExists = await context.Movies.AnyAsync(m => m.Id == ratingCreationDTO.MovieId);

            if (!movieExists)
            {
                return NotFound();
            }

            var userId = await usersService.GetUserId();

            var existingRating = await context.MovieRatings
                .FirstOrDefaultAsync(mr => mr.MovieId == ratingCreationDTO.MovieId && mr.UserId == userId);

            if (existingRating is null)
            {
                var rating = new Rating()
                {
                    MovieId = ratingCreationDTO.MovieId,
                    Rate = ratingCreationDTO.Rate,
                    UserId = userId
                };

                context.Add(rating);
            }
            else
            {
                existingRating.Rate = ratingCreationDTO.Rate;
            }

            await context.SaveChangesAsync();
            return NoContent();
        }
    }
}