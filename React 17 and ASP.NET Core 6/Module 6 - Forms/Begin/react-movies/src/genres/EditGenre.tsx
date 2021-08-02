import { useParams } from "react-router-dom";

export default function EditGenre(){
    const {id}: any = useParams();
    return (
        <>
            <h3>Edit Genre</h3>
            The id is {id}
        </>
    )
}