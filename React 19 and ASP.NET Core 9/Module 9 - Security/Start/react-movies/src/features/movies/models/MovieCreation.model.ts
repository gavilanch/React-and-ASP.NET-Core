import type MovieActor from "./MovieActor.model";

export default interface MovieCreation {
    title: string;
    releaseDate: string;
    trailer?: string;
    poster?: File | string;
    genresIds?: number[];
    theatersIds?: number[];
    actors?: MovieActor[];
}