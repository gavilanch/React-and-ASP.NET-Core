import { NavLink } from "react-router";
import type Movie from "../models/movie.model";
import styles from './DisplayMovie.module.css'

export default function DisplayMovie(props: DisplayMovieProps){

    const buildLink = () => `/movie/${props.movie.id}`

    return (
        <div className={styles.div}>
            <NavLink to={buildLink()}>
                <img src={props.movie.poster} alt="Poster" />
            </NavLink>
            <p>
                <NavLink to={buildLink()}>{props.movie.title}</NavLink>
            </p>
        </div>
    )
}

interface DisplayMovieProps{
    movie: Movie;
}