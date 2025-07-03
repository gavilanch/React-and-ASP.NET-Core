import type Genre from "../../genres/models/Genre.model";
import type Theater from "../../theaters/models/Theater.model";
import type Movie from "./movie.model";
import type MovieActor from "./MovieActor.model";

export default interface MoviesPutGet{
    movie: Movie;
    selectedGenres: Genre[];
    nonSelectedGenres: Genre[];
    selectedTheaters: Theater[];
    nonSelectedTheaters: Theater[];
    actors: MovieActor[];
}