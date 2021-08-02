using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using MoviesAPI.Entities;
using MoviesAPI.Filters;
using MoviesAPI.Services;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace MoviesAPI.Controllers
{
    [Route("api/genres")]
    [ApiController]
    public class GenresController: ControllerBase
    {
        private readonly IRepository repository;
        private readonly ILogger<GenresController> logger;

        public GenresController(IRepository repository, ILogger<GenresController> logger)
        {
            this.repository = repository;
            this.logger = logger;
        }

        [HttpGet] // api/genres
        [HttpGet("list")] // api/genres/list
        [HttpGet("/allgenres")] // allgenres
        //[ResponseCache(Duration = 60)]
        [ServiceFilter(typeof(MyActionFilter))]
        public async Task<ActionResult<List<Genre>>> Get()
        {
            logger.LogInformation("Getting all the genres");

            return await repository.GetAllGenres();
        }

        [HttpGet("{Id:int}", Name = "getGenre")] // api/genres/example
        [ServiceFilter(typeof(MyActionFilter))]
        public ActionResult<Genre> Get(int Id, string param2)
        {
            logger.LogDebug("get by Id method executing...");

            var genre = repository.GetGenreById(Id);

            if (genre == null)
            {
                logger.LogWarning($"Genre with Id {Id} not found");
                logger.LogError("this is an error");
                //throw new ApplicationException();
                return NotFound();
            }

            //return Ok(2);
            //return "felipe";
            return genre;
        }

        [HttpPost]
        public ActionResult Post([FromBody] Genre genre)
        {
            repository.AddGenre(genre);

            return new CreatedAtRouteResult("getGenre", new { Id = genre.Id }, genre);
        }

        [HttpPut]
        public ActionResult Put([FromBody] Genre genre)
        {

            return NoContent();
        }

        [HttpDelete]
        public ActionResult Delete()
        {
            return NoContent();

        }
    }
}
