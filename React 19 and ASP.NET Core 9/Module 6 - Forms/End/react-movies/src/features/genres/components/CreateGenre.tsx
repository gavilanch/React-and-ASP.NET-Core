import { type SubmitHandler } from "react-hook-form";
import GenreForm from "./GenreForm";
import type CreateGenre from "../models/CreateGenre.model";

export default function CreateGenre(){
    
    const onSubmit: SubmitHandler<CreateGenre> = async (data) => {
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log(data);
    }

    return (
        <>
            <h3>Create Genre</h3>
            <GenreForm onSubmit={onSubmit} />
        </>
    )
}


