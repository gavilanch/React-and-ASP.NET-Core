namespace MoviesAPI.DTOs
{
    public class MoviesFilterDTO
    {
        public int Page { get; set; }
        public int RecordsPerPage { get; set; }
        internal PaginationDTO PaginationDTO
        {
            get { return new PaginationDTO() { Page = Page, RecordsPerPage = RecordsPerPage }; }
        }

        public string? Title { get; set; }
        public int GenreId { get; set; }
        public bool InTheaters { get; set; }
        public bool UpcomingReleases { get; set; }
    }
}
