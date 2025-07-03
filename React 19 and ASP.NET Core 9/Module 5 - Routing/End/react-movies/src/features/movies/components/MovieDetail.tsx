import { useParams } from "react-router"

export default function MovieDetail(){

    const {id} = useParams();

    return (
        <>
            <h3>Movie Detail: {id}</h3>
        </>
    )
}