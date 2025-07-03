import type { SubmitHandler } from "react-hook-form"
import TheaterForm from "./TheaterForm";
import type TheaterCreation from "../models/TheaterCreation.model";
import apiClient from "../../../api/apiClient";
import { useNavigate } from "react-router";
import extractErrors from "../../../utils/extractErrors";
import type { AxiosError } from "axios";
import { useState } from "react";

export default function CreateTheater(){

    const navigate = useNavigate();
    const [errors, setErrors] = useState<string[]>([]);

    const onSubmit: SubmitHandler<TheaterCreation> = async (data) => {
       try{
            await apiClient.post('/theaters', data);
            navigate('/theaters');
       } catch(err){
            const errors = extractErrors(err as AxiosError);
            setErrors(errors);
       }
    }

    return (
        <>
            <h3>Create Theater</h3>
            <TheaterForm errors={errors} onSubmit={onSubmit} />
        </>
    )
}