namespace MoviesAPI.DTOs
{
    public class PaginationDTO
    {
        public int Page { get; set; } = 1;

        private int recordsPerPage = 10;
        private int maximumAmountOfRecordsPerPage = 50;

        public int RecordsPerPage
        {
            get { return recordsPerPage; }
            set
            {
                recordsPerPage = (value > maximumAmountOfRecordsPerPage) ? maximumAmountOfRecordsPerPage : value;
            }
        }
    }
}