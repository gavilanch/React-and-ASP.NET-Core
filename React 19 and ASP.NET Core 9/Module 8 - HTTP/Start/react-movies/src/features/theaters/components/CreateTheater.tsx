import type { SubmitHandler } from "react-hook-form"
import type TheaterCreation from "../models/TheaterCreation"
import TheaterForm from "./TheaterForm";

export default function CreateTheater(){

    const onSubmit: SubmitHandler<TheaterCreation> = async (data) => {
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log(data);
    }

    return (
        <>
            <h3>Create Theater</h3>
            <TheaterForm onSubmit={onSubmit} />
        </>
    )
}