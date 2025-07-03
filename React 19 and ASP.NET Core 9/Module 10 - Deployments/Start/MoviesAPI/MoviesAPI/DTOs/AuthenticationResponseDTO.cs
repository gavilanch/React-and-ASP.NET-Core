namespace MoviesAPI.DTOs
{
    public class AuthenticationResponseDTO
    {
        public required string Token { get; set; }
        public DateTime Expiration { get; set; }
    }
}
