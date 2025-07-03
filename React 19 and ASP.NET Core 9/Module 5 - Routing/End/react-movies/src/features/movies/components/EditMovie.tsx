import { useParams } from "react-router"

export default function EditMovie(){

    const {id} = useParams();

    return (
        <>
            <h3>Edit Movie: {id}</h3>
        </>
    )
}