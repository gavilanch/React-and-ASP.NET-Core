using AutoMapper;
using AutoMapper.QueryableExtensions;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OutputCaching;
using Microsoft.EntityFrameworkCore;
using MoviesAPI.DTOs;
using MoviesAPI.Entities;
using MoviesAPI.Services;
using MoviesAPI.Utilities;

namespace MoviesAPI.Controllers
{
    [Route("api/actors")]
    [ApiController]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme, Policy = "isadmin")]
    public class ActorsController : CustomBaseController
    {
        private readonly ApplicationDbContext context;
        private readonly IMapper mapper;
        private readonly IOutputCacheStore outputCacheStore;
        private readonly IFileStorage fileStorage;
        private const string cacheTag = "actors";
        private readonly string container = "actors";

        public ActorsController(ApplicationDbContext context, IMapper mapper,
            IOutputCacheStore outputCacheStore, IFileStorage fileStorage)
            : base(context, mapper, outputCacheStore, cacheTag)
        {
            this.context = context;
            this.mapper = mapper;
            this.outputCacheStore = outputCacheStore;
            this.fileStorage = fileStorage;
        }

        [HttpGet]
        [OutputCache(Tags = [cacheTag])]
        public async Task<List<ActorDTO>> Get([FromQuery] PaginationDTO pagination)
        {
            return await Get<Actor, ActorDTO>(pagination, orderBy: a => a.Name);
        }

        [HttpGet("{id:int}", Name = "GetActorById")]
        [OutputCache(Tags = [cacheTag])]
        public async Task<ActionResult<ActorDTO>> Get(int id)
        {
            return await Get<Actor, ActorDTO>(id);
        }

        [HttpGet("{name}")]
        public async Task<ActionResult<List<MovieActorDTO>>> Get(string name)
        {
            return await context.Actors.Where(a => a.Name.Contains(name))
                .ProjectTo<MovieActorDTO>(mapper.ConfigurationProvider)
                .ToListAsync();
        }

        [HttpPost]
        public async Task<CreatedAtRouteResult> Post([FromForm] ActorCreationDTO actorCreationDTO)
        {
            var actor = mapper.Map<Actor>(actorCreationDTO);

            if (actorCreationDTO.Picture is not null)
            {
                var url = await fileStorage.Store(container, actorCreationDTO.Picture);
                actor.Picture = url;
            }

            context.Add(actor);
            await context.SaveChangesAsync();
            await outputCacheStore.EvictByTagAsync(cacheTag, default);
            var actorDTO = mapper.Map<ActorDTO>(actor);
            return CreatedAtRoute("GetActorById", new { id = actor.Id }, actorDTO);
        }

        [HttpPut("{id:int}")]
        public async Task<IActionResult> Put(int id, [FromForm] ActorCreationDTO actorCreationDTO)
        {
            var actor = await context.Actors.FirstOrDefaultAsync(a => a.Id == id);

            if (actor is null)
            {
                return NotFound();
            }

            actor = mapper.Map(actorCreationDTO, actor);

            if (actorCreationDTO.Picture is not null)
            {
                actor.Picture = await fileStorage.Edit(actor.Picture, container, actorCreationDTO.Picture);
            }

            await context.SaveChangesAsync();
            await outputCacheStore.EvictByTagAsync(cacheTag, default);
            return NoContent();
        }

        [HttpDelete("{id:int}")]
        public async Task<IActionResult> Delete(int id)
        {
            var actor = await context.Actors.FirstOrDefaultAsync(a => a.Id == id);

            if (actor is null)
            {
                return NotFound();
            }

            context.Remove(actor);
            await context.SaveChangesAsync();
            await outputCacheStore.EvictByTagAsync(cacheTag, default);
            await fileStorage.Delete(actor.Picture, container);
            return NoContent();
        }
    }
}