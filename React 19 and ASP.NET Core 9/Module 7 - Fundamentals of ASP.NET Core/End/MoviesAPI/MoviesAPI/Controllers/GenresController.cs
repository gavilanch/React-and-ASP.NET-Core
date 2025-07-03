using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OutputCaching;
using MoviesAPI.Entities;

namespace MoviesAPI.Controllers
{
    [Route("api/genres")]
    [ApiController]
    public class GenresController: ControllerBase
    {
        private readonly IRepository repository;
        private readonly TransientService transient1;
        private readonly TransientService transient2;
        private readonly ScopedService scoped1;
        private readonly ScopedService scoped2;
        private readonly SingletonService singleton;
        private readonly IOutputCacheStore outputCacheStore;
        private readonly IConfiguration configuration;
        private const string cacheTag = "genres";

        public GenresController(IRepository repository, TransientService transient1,
            TransientService transient2, ScopedService scoped1, ScopedService scoped2,
            SingletonService singleton, IOutputCacheStore outputCacheStore, IConfiguration configuration)
        {
            this.repository = repository;
            this.transient1 = transient1;
            this.transient2 = transient2;
            this.scoped1 = scoped1;
            this.scoped2 = scoped2;
            this.singleton = singleton;
            this.outputCacheStore = outputCacheStore;
            this.configuration = configuration;
        }

        [HttpGet("get-connection-string")]
        public IActionResult GetConnectionString()
        {
            var connectionString = configuration.GetValue<string>("myConnectionString");
            return Ok(connectionString);
        }

        [HttpGet("lifecycle-services")]
        public IActionResult GetLifecycleServices()
        {
            return Ok(new
            {
                Transients = new
                {
                    transient1 = transient1.GetId(),
                    transient2 = transient2.GetId()
                },
               Scopeds = new
               {
                   scoped1 = scoped1.GetId(),
                   scoped2 = scoped2.GetId()
               },
               Singleton = new
               {
                   singleton = singleton.GetId()
               }
            });
        }

        [HttpGet("all-genres")] // api/genres/all-genres
        [HttpGet] // api/genres
        [HttpGet("/all-of-the-genres")] // /all-of-the-genres
        [OutputCache(Tags = [cacheTag])]
        public List<Genre> Get()
        {
            var genres = repository.GetAllGenres();
            
            return genres;
        }

        [HttpGet("{id:int}")] // api/genres/500
        [OutputCache(Tags = [cacheTag])]
        public async Task<ActionResult<Genre>> Get(int id)
        {
            var genre =  await repository.GetById(id);

            if (genre is null)
            {
                return NotFound();
            }

            return genre;
        }

        [HttpGet("{name}")] // api/genres/comedy?id=7
        [OutputCache(Tags = [cacheTag])]
        public async Task<ActionResult<Genre>> Get(string name, [FromQuery] int id)
        {
            return new Genre {Id = id, Name = name };
        }

        [HttpPost]
        public async Task<ActionResult<Genre>> Post([FromBody] Genre genre)
        {
            var genreWithSameNameExists = repository.Exists(genre.Name);

            if (genreWithSameNameExists)
            {
                return BadRequest($"There's already a genre with the name {genre.Name}");
            }

            repository.Create(genre);
            await outputCacheStore.EvictByTagAsync(cacheTag, default);
            return genre;
        }

        [HttpPut]
        public void Put()
        {

        }

        [HttpDelete]
        public void Delete()
        {

        }
    }
}
