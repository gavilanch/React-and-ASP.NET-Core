import { useParams } from "react-router"

export default function EditActor(){

    const {id} = useParams();

    return (
        <>
            <h3>Edit Actor: {id}</h3>
        </>
    )
}