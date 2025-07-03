import { NavLink } from "react-router";
import type Movie from "../models/movie.model";
import styles from './DisplayMovie.module.css'
import Button from "../../../components/Button";
import customConfirm from "../../../utils/customConfirm";
import apiClient from "../../../api/apiClient";
import { useContext } from "react";
import AlertContext from "../../../utils/AlertContext";
import Authorized from "../../security/components/Authorized";

export default function DisplayMovie(props: DisplayMovieProps) {

    const buildLink = () => `/movie/${props.movie.id}`
    const alert = useContext(AlertContext);

    async function deleteMovie() {
        await apiClient.delete(`/movies/${props.movie.id}`);
        alert();
    }

    return (
        <div className={styles.div}>
            <NavLink to={buildLink()}>
                <img src={props.movie.poster} alt="Poster" />
            </NavLink>
            <p>
                <NavLink to={buildLink()}>{props.movie.title}</NavLink>
            </p>
            <div>

                <Authorized claims={['isadmin']}
                    authorized={<>
                        <NavLink to={`/movies/edit/${props.movie.id}`} className='btn btn-primary'>Edit</NavLink>
                        <Button className="btn btn-danger ms-4" onClick={() => customConfirm(() => deleteMovie())}>Delete</Button>
                    </>}
                />


            </div>
        </div>
    )
}

interface DisplayMovieProps {
    movie: Movie;
}