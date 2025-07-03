using AutoMapper;
using Microsoft.AspNetCore.Identity;
using MoviesAPI.DTOs;
using MoviesAPI.Entities;
using NetTopologySuite.Geometries;

namespace MoviesAPI.Utilities
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles(GeometryFactory geometryFactory)
        {
            ConfigureGenres();
            ConfigureActors();
            ConfigureTheaters(geometryFactory);
            ConfigureMovies();
            ConfigureUsers();
        }

        private void ConfigureUsers()
        {
            CreateMap<IdentityUser, UserDTO>();
        }

        private void ConfigureMovies()
        {
            CreateMap<MovieCreationDTO, Movie>()
                .ForMember(ent => ent.Poster, options => options.Ignore())
                .ForMember(ent => ent.MoviesGenres, dto =>
                dto.MapFrom(p => p.GenresIds!.Select(id => new MovieGenre { GenreId = id })))
                .ForMember(ent => ent.MoviesTheaters, dto =>
                dto.MapFrom(p => p.TheatersIds!.Select(id => new MovieTheater { TheaterId = id })))
                .ForMember(ent => ent.MoviesActors, dto =>
                dto.MapFrom(p => p.Actors!.Select(actor =>
                new MovieActor { ActorId = actor.Id, Character = actor.Character })));

            CreateMap<Movie, MovieDTO>();

            CreateMap<Movie, MovieDetailsDTO>()
                .ForMember(dto => dto.Genres, ent => ent.MapFrom(p => p.MoviesGenres))
                .ForMember(dto => dto.Theaters, ent => ent.MapFrom(p => p.MoviesTheaters))
                .ForMember(dto => dto.Actors, ent => ent.MapFrom(p => p.MoviesActors.OrderBy(ma => ma.Order)));

            CreateMap<MovieGenre, GenreDTO>()
                .ForMember(dto => dto.Id, ent => ent.MapFrom(p => p.GenreId))
                .ForMember(dto => dto.Name, ent => ent.MapFrom(p => p.Genre.Name));

            CreateMap<MovieTheater, TheaterDTO>()
                .ForMember(dto => dto.Id, ent => ent.MapFrom(p => p.TheaterId))
                .ForMember(dto => dto.Name, ent => ent.MapFrom(p => p.Theater.Name))
                .ForMember(dto => dto.Latitude, ent => ent.MapFrom(p => p.Theater.Location.Y))
                .ForMember(dto => dto.Longitude, ent => ent.MapFrom(p => p.Theater.Location.X));

            CreateMap<MovieActor, MovieActorDTO>()
                .ForMember(dto => dto.Id, ent => ent.MapFrom(p => p.ActorId))
                .ForMember(dto => dto.Name, ent => ent.MapFrom(p => p.Actor.Name))
                .ForMember(dto => dto.Picture, ent => ent.MapFrom(p => p.Actor.Picture));


        }

        private void ConfigureTheaters(GeometryFactory geometryFactory)
        {
            CreateMap<Theater, TheaterDTO>()
                .ForMember(x => x.Latitude, x => x.MapFrom(p => p.Location.Y))
                .ForMember(x => x.Longitude, x => x.MapFrom(p => p.Location.X));

            CreateMap<TheaterCreationDTO, Theater>()
                .ForMember(entity => entity.Location, dto => dto.MapFrom(p =>
                    geometryFactory.CreatePoint(new Coordinate(p.Longitude, p.Latitude
                ))));
        }

        private void ConfigureActors()
        {
            CreateMap<ActorCreationDTO, Actor>()
                .ForMember(x => x.Picture, options => options.Ignore());

            CreateMap<Actor, ActorDTO>();

            CreateMap<Actor, MovieActorDTO>();
        }

        private void ConfigureGenres()
        {
            CreateMap<GenreCreationDTO, Genre>();
            CreateMap<Genre, GenreDTO>();
        }
    }
}