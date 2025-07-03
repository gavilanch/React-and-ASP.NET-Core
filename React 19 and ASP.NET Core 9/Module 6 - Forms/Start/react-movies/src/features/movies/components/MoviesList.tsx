import GenericList from "../../../components/GenericList";
import type Movie from "../models/movie.model";
import DisplayMovie from "./DisplayMovie";
import styles from './MoviesList.module.css'

export default function MoviesList(props: MoviesListProps) {

    return ( 
    <GenericList list={props.movies}
   
    emptyListUI={<>there are no movies to display</>}
    >
        <div className={styles.div}>
            {props.movies?.map(movie => <DisplayMovie key={movie.id} movie={movie} />)}
        </div>
    </GenericList>
    )
}

interface MoviesListProps {
    movies?: Movie[];
}