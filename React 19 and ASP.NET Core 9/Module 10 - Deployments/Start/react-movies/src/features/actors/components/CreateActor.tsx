import type { SubmitHandler } from "react-hook-form";
import type ActorCreation from "../models/ActorCreation";
import ActorForm from "./ActorForm";
import { useState } from "react";
import apiClient from "../../../api/apiClient";
import { useNavigate } from "react-router";
import extractErrors from "../../../utils/extractErrors";
import type { AxiosError } from "axios";

export default function CreateActor() {

    const [errors, setErrors] = useState<string[]>([]);
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<ActorCreation> = async (data) => {
        try {
            await apiClient.postForm('/actors', data);
            navigate('/actors');
        }
        catch (err) {
            const errors = extractErrors(err as AxiosError);
            setErrors(errors);
        }
    }

    return (
        <>
            <h3>Create Actor</h3>
            <ActorForm errors={errors} onSubmit={onSubmit} />
        </>
    )
}