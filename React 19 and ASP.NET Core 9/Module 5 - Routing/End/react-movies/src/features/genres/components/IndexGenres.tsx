import { NavLink } from "react-router";

export default function IndexGenres(){
    return (
        <>
            <h3>Genres</h3>
            <NavLink className="btn btn-primary" 
            to="/genres/create">Create Genre</NavLink>
        </>
    )
}