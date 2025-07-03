import { useParams } from "react-router"

export default function EditTheater(){

    const {id} = useParams();

    return (
        <>
            <h3>Edit Theater: {id}</h3>
        </>
    )
}