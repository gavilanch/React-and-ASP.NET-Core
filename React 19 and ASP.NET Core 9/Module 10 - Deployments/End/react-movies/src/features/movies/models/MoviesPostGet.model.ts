import type Genre from "../../genres/models/Genre.model";
import type Theater from "../../theaters/models/Theater.model";

export default interface MoviesPostGet {
    genres: Genre[];
    theaters: Theater[];
}