import type { SubmitHandler } from "react-hook-form";
import { useParams } from "react-router"
import type CreateGenre from "../models/CreateGenre.model";
import GenreForm from "./GenreForm";
import { useEffect, useState } from "react";
import Loading from "../../../components/Loading";

export default function EditGenre(){

    const {id} = useParams();
    const [model, setModel] = useState<CreateGenre | undefined>(undefined);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setModel({name: 'Drama ' + id});
        }, 1000);

        return () => clearTimeout(timerId);
    }, [id])

    const onSubmit: SubmitHandler<CreateGenre> = async (data) => {
            await new Promise(resolve => setTimeout(resolve, 2000));
            console.log(data);
        }

    return (
        <>
            <h3>Edit Genre</h3>
            {model ? <GenreForm onSubmit={onSubmit} model={model} /> : <Loading />} 
        </>
    )
}