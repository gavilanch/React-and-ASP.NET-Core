using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MoviesAPI.DTOs
{
    public class LandingPageDTO
    {
        public List<MovieDTO> InTheaters { get; set; }
        public List<MovieDTO> UpcomingReleases { get; set; }
    }
}
