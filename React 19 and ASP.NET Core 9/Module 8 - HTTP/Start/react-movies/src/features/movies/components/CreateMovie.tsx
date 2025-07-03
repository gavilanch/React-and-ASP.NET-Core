import type { SubmitHandler } from "react-hook-form"
import type MovieCreation from "../models/MovieCreation.model"
import MovieForm from "./MovieForm";
import type Genre from "../../genres/models/Genre.model";
import type Theater from "../../theaters/models/Theater.model";

export default function CreateMovie() {

    const onSubmit: SubmitHandler<MovieCreation> = async (data) => {
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log(data);
    }

    const nonSelectedGenres: Genre[] = [{id: 1, name: 'Action'}, {id: 2, name: 'Drama'}]

    const nonSelectedTheaters: Theater[] = [{id: 1, name: 'Sambil', latitude: 0, longitude: 0},
        {id: 2, name: 'Agora', latitude: 0, longitude: 0}
    ]

    return (
        <>
            <h3>Create Movie</h3>
            <MovieForm onSubmit={onSubmit} nonSelectedGenres={nonSelectedGenres}
            selectedGenres={[]}
            nonSelectedTheaters={nonSelectedTheaters}
            selectedTheaters={[]}
            selectedActors={[]}
            />
        </>
    )
}