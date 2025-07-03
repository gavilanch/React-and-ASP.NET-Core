import { useEffect, useState } from "react";
import { useParams } from "react-router"
import type TheaterCreation from "../models/TheaterCreation";
import TheaterForm from "./TheaterForm";
import Loading from "../../../components/Loading";
import type { SubmitHandler } from "react-hook-form";

export default function EditTheater(){

    const {id} = useParams();
    const [model, setModel] = useState<TheaterCreation | undefined>(undefined);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setModel({name: 'Sambil ' + id, latitude: 18.482502977654867, longitude: -69.91208696368632});
        }, 1000);

        return () => clearTimeout(timerId)
    }, [id])

    const onSubmit: SubmitHandler<TheaterCreation> = async (data) => {
            await new Promise(resolve => setTimeout(resolve, 1000));
            console.log(data);
        }

    return (
        <>
            <h3>Edit Theater</h3>
            {model ? <TheaterForm model={model} onSubmit={onSubmit} /> : <Loading />}
        </>
    )
}