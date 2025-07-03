using Microsoft.EntityFrameworkCore;
using MoviesAPI.Entities;

namespace MoviesAPI
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions options) : base(options)
        {
        }

        protected ApplicationDbContext()
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<MovieGenre>().HasKey(e => new { e.GenreId, e.MovieId });
            modelBuilder.Entity<MovieTheater>().HasKey(e => new { e.TheaterId, e.MovieId });
            modelBuilder.Entity<MovieActor>().HasKey(e => new { e.ActorId, e.MovieId });
        }

        public DbSet<Genre> Genres { get; set; }
        public DbSet<Actor> Actors { get; set; }
        public DbSet<Theater> Theaters { get; set; }
        public DbSet<Movie> Movies { get; set; }
        public DbSet<MovieGenre> MoviesGenres { get; set; }
        public DbSet<MovieTheater> MoviesTheaters { get; set; }
        public DbSet<MovieActor> MoviesActors { get; set; }
    }
}
