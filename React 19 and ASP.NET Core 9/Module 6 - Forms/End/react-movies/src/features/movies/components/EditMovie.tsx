import { useEffect, useState } from "react";
import { useParams } from "react-router"
import type MovieCreation from "../models/MovieCreation.model";
import type { SubmitHandler } from "react-hook-form";
import MovieForm from "./MovieForm";
import Loading from "../../../components/Loading";
import type Genre from "../../genres/models/Genre.model";
import type Theater from "../../theaters/models/Theater.model";

export default function EditMovie() {

    const { id } = useParams();
    const [model, setModel] = useState<MovieCreation | undefined>(undefined);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setModel({ title: 'Spider-Man', releaseDate: '2019-07-03', trailer: 'my url', poster: 'https://upload.wikimedia.org/wikipedia/en/b/bd/Spider-Man_Far_From_Home_poster.jpg' })
        }, 1000);

        return () => clearInterval(timerId);
    }, [id])

    const onSubmit: SubmitHandler<MovieCreation> = async (data) => {
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log(data);
    }

    const nonSelectedGenres: Genre[] = [{ id: 2, name: 'Drama' }]
    const selectedGenres: Genre[] = [{ id: 1, name: 'Action' }]

    const nonSelectedTheaters: Theater[] = [{ id: 1, name: 'Sambil', latitude: 0, longitude: 0 }];
    const selectedTheaters: Theater[] = [{ id: 2, name: 'Agora', latitude: 0, longitude: 0 }];

    return (
        <>
            <h3>Edit Movie</h3>
            {model ? <MovieForm model={model} onSubmit={onSubmit}
                selectedGenres={selectedGenres}
                nonSelectedGenres={nonSelectedGenres}
                selectedTheaters={selectedTheaters}
                nonSelectedTheaters={nonSelectedTheaters}
                /> : <Loading />}
        </>
    )
}