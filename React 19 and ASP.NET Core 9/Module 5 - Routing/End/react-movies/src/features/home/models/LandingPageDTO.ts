import type Movie from "../../movies/models/movie.model";

export default interface LandingPageDTO {
    inTheaters?: Movie[];
    upcomingReleases?: Movie[];
}