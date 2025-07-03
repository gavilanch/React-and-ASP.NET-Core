import { useForm, type SubmitHandler } from "react-hook-form";
import type MovieCreation from "../models/MovieCreation.model";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import SelectImage from "../../../components/SelectImage/SelectImage";
import Button from "../../../components/Button";
import { NavLink } from "react-router";
import type Genre from "../../genres/models/Genre.model";
import type MultipleSelectionDTO from "../../../components/MultipleSelection/MultipleSelectionDTO.model";
import { useState } from "react";
import MultipleSelection from "../../../components/MultipleSelection/MultipleSelection";
import type Theater from "../../theaters/models/Theater.model";
import TypeaheadActors from "./TypeaheadActors";
import type MovieActor from "../models/MovieActor.model";
import DisplayErrors from "../../../components/DisplayErrors";

export default function MovieForm(props: MovieFormProps) {

    const [nonSelectedGenres, setNonSelectedGenres] = useState(toMultipleSelection(props.nonSelectedGenres));
    const [selectedGenres, setSelectedGenres] = useState(toMultipleSelection(props.selectedGenres));

    const [nonSelectedTheaters, setNonSelectedTheaters] = useState(toMultipleSelection(props.nonSelectedTheaters));
    const [selectedTheaters, setSelectedTheaters] = useState(toMultipleSelection(props.selectedTheaters));

    const [selectedActors, setSelectedActors] = useState(props.selectedActors);

    const {
        register, handleSubmit, setValue,
        formState: { errors, isValid, isSubmitting }
    } = useForm<MovieCreation>({
        resolver: yupResolver(validationRules),
        mode: 'onChange',
        defaultValues: props.model ?? { title: '' }
    })

    function toMultipleSelection(array: { id: number, name: string }[]): MultipleSelectionDTO[] {
        return array.map(value => {
            return { key: value.id, description: value.name }
        })
    }

    const currentImageURL: string | undefined = props.model?.poster ? props.model.poster as string : undefined;

    const onSubmit: SubmitHandler<MovieCreation> = data => {
        data.genresIds = selectedGenres.map(x => x.key);
        data.theatersIds = selectedTheaters.map(x => x.key);
        data.actors = selectedActors;

        return props.onSubmit(data);
    }

    return (
        <>
            <DisplayErrors errors={props.errors} />
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input id="title" autoComplete="off" className="form-control" {...register('title')} />
                    {errors.title && <p className="error">{errors.title.message}</p>}
                </div>

                <div className="form-group">
                    <label htmlFor="releaseDate">Release Date</label>
                    <input id="releaseDate" type="date" autoComplete="off" className="form-control" {...register('releaseDate')} />
                    {errors.releaseDate && <p className="error">{errors.releaseDate.message}</p>}
                </div>

                <div className="form-group">
                    <label htmlFor="trailer">Trailer (Youtube)</label>
                    <input id="trailer" autoComplete="off" className="form-control" {...register('trailer')} />
                </div>

                <SelectImage imageURL={currentImageURL} selectedImage={image => setValue('poster', image)} />

                <div className="form-group">
                    <label>Genres:</label>
                    <MultipleSelection selected={selectedGenres} nonSelected={nonSelectedGenres}
                        onChange={(selected, nonSelected) => {
                            setSelectedGenres(selected);
                            setNonSelectedGenres(nonSelected);
                        }} />
                </div>

                <div className="form-group">
                    <label>Theaters:</label>
                    <MultipleSelection selected={selectedTheaters} nonSelected={nonSelectedTheaters}
                        onChange={(selected, nonSelected) => {
                            setSelectedTheaters(selected);
                            setNonSelectedTheaters(nonSelected);
                        }} />
                </div>

                <div className="form-group">
                    <TypeaheadActors
                        actors={selectedActors}
                        onAdd={actors => {
                            setSelectedActors(actors);
                            setValue('actors', actors);
                        }}

                        onRemove={actor => {
                            const actors = selectedActors.filter(ca => ca != actor);
                            setSelectedActors(actors);
                            setValue('actors', actors);
                        }}
                        onCharacterChange={(id, character) => {
                            const index = selectedActors.findIndex(ca => ca.id === id);

                            const actors = [...selectedActors];
                            actors[index].character = character;
                            setSelectedActors(actors);
                            setValue('actors', actors);
                        }}
                    />
                </div>

                <div className="mt-2">
                    <Button
                        type="submit" disabled={!isValid || isSubmitting}
                    >{isSubmitting ? "Sending..." : "Send"}</Button>
                    <NavLink to="/" className="btn btn-secondary ms-2">Cancel</NavLink>
                </div>

            </form>
        </>
    )

}

interface MovieFormProps {
    model?: MovieCreation;
    onSubmit: SubmitHandler<MovieCreation>;
    nonSelectedGenres: Genre[];
    selectedGenres: Genre[];
    nonSelectedTheaters: Theater[];
    selectedTheaters: Theater[];
    selectedActors: MovieActor[];
    errors: string[];
}

const validationRules = yup.object({
    title: yup.string().required('The title is required'),
    releaseDate: yup.string().required('The release date is required')
})