import type MovieCreation from "../models/MovieCreation.model";

export default function convertMovieToFormData(movieCreation: MovieCreation): FormData {
    const formData = new FormData();

    formData.append('title', movieCreation.title);
    formData.append('releaseDate', movieCreation.releaseDate);

    if (movieCreation.poster){
        formData.append('poster', movieCreation.poster);
    }

    if (movieCreation.trailer){
        formData.append('trailer', movieCreation.trailer);
    }

    formData.append('genresIds', JSON.stringify(movieCreation.genresIds ?? []));
    formData.append('theatersIds', JSON.stringify(movieCreation.theatersIds ?? []));
    formData.append('actors', JSON.stringify(movieCreation.actors ?? []));

    return formData;
}