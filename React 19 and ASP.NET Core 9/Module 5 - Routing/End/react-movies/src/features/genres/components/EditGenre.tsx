import { useParams } from "react-router"

export default function EditGenre(){

    const {id} = useParams();

    return (
        <>
            <h3>Edit Genre: {id}</h3>
        </>
    )
}