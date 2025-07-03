import type Genre from "../../genres/models/Genre.model";
import type Theater from "../../theaters/models/Theater.model";
import type MovieActor from "./MovieActor.model";

export default interface Movie {
    id: number;
    title: string;
    poster: string;
    releaseDate: string;
    trailer: string;
    genres?: Genre[];
    theaters?: Theater[];
    actors?: MovieActor[];
    averageRate: number;
    userVote: number;
}