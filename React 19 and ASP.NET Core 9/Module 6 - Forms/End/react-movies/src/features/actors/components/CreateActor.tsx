import type { SubmitHandler } from "react-hook-form";
import type ActorCreation from "../models/ActorCreation";
import ActorForm from "./ActorForm";

export default function CreateActor(){

    const onSubmit: SubmitHandler<ActorCreation> = async (data) => {
            await new Promise(resolve => setTimeout(resolve, 2000));
            console.log(data);
        }

    return (
        <>
            <h3>Create Actor</h3>
            <ActorForm onSubmit={onSubmit} />
        </>
    )
}