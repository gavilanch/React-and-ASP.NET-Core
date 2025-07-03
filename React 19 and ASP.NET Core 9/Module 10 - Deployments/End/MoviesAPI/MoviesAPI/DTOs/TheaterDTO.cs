namespace MoviesAPI.DTOs
{
    public class TheaterDTO : IId
    {
        public int Id { get; set; }
        public required string Name { get; set; }
        public double Latitude { get; set; }
        public double Longitude { get; set; }
    }
}
