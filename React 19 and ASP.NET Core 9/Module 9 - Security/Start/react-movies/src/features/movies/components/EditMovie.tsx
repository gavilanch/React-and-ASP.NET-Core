import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router"
import type MovieCreation from "../models/MovieCreation.model";
import type { SubmitHandler } from "react-hook-form";
import MovieForm from "./MovieForm";
import Loading from "../../../components/Loading";
import apiClient from "../../../api/apiClient";
import type MoviesPutGet from "../models/MoviesPutGet.model";
import formatDate from "../../../utils/formatDate";
import convertMovieToFormData from "../utils/convertMovieToFormData";
import extractErrors from "../../../utils/extractErrors";
import type { AxiosError } from "axios";

export default function EditMovie() {

    const { id } = useParams();
    const [model, setModel] = useState<MovieCreation | undefined>(undefined);
    const [moviesPutGet, setMoviesPutGet] = useState<MoviesPutGet>();
    const navigate = useNavigate();
    const [errors, setErrors] = useState<string[]>([]);

    useEffect(() => {
        apiClient.get<MoviesPutGet>(`/movies/putget/${id}`).then(res => {
            const movie = res.data.movie;
            const movieCreation: MovieCreation = {
                title: movie.title,
                releaseDate: formatDate(movie.releaseDate),
                trailer: movie.trailer,
                poster: movie.poster
            }
            setModel(movieCreation);
            setMoviesPutGet(res.data);
        })
    }, [id])

    const onSubmit: SubmitHandler<MovieCreation> = async (data) => {
        try {
            const formData = convertMovieToFormData(data);
            await apiClient.putForm(`/movies/${id}`, formData);
            navigate(`/movie/${id}`);
        }
        catch(err) {
            const errors = extractErrors(err as AxiosError);
            setErrors(errors);
        }
    }

    return (
        <>
            <h3>Edit Movie</h3>
            {model && moviesPutGet ? <MovieForm errors={errors} model={model} onSubmit={onSubmit}
                selectedGenres={moviesPutGet.selectedGenres}
                nonSelectedGenres={moviesPutGet.nonSelectedGenres}
                selectedTheaters={moviesPutGet.selectedTheaters}
                nonSelectedTheaters={moviesPutGet.nonSelectedTheaters}
                selectedActors={moviesPutGet.actors}
            /> : <Loading />}
        </>
    )
}