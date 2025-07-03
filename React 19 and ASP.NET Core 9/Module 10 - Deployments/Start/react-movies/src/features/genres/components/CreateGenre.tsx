import { type SubmitHandler } from "react-hook-form";
import GenreForm from "./GenreForm";
import type CreateGenre from "../models/CreateGenre.model";
import apiClient from "../../../api/apiClient";
import { useNavigate } from "react-router";
import extractErrors from "../../../utils/extractErrors";
import type { AxiosError } from "axios";
import { useState } from "react";

export default function CreateGenre() {

    const navigate = useNavigate();
    const [errors, setErrors] = useState<string[]>([]);

    const onSubmit: SubmitHandler<CreateGenre> = async (data) => {
        try {
            await apiClient.post("/genres", data);
            navigate("/genres");
        } catch(err){
            const errors = extractErrors(err as AxiosError);
            setErrors(errors);
        }
    }

    return (
        <>
            <h3>Create Genre</h3>
            <GenreForm onSubmit={onSubmit} errors={errors} />
        </>
    )
}


