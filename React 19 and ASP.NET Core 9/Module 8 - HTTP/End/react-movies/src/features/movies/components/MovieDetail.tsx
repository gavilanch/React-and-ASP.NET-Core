import { useEffect, useState } from "react";
import { useParams } from "react-router"
import apiClient from "../../../api/apiClient";
import type Movie from "../models/movie.model";
import Loading from "../../../components/Loading";
import type Coordinate from "../../../components/Map/coordinate.model";
import Map from '../../../components/Map/Map';

export default function MovieDetail() {

    const { id } = useParams();
    const [movie, setMovie] = useState<Movie>();

    useEffect(() => {
        apiClient.get<Movie>(`/movies/${id}`).then(res => {
            setMovie(res.data);
        })
    }, [id])

    if (!movie) {
        return <Loading />
    }

    const date = new Date(movie.releaseDate);
    const year = date.getFullYear();
    const dateFormatted = date.toLocaleDateString();

    function getYoutubeEmbedURL(url: string): string | undefined {
        const objUrl = new URL(url);
        const videoId = objUrl.searchParams.get('v');
        return videoId ? `https://www.youtube.com/embed/${videoId}` : undefined;
    }

    function transformCoordinates(): Coordinate[]{
        return movie!.theaters!.map(t => {
            const coordinate: Coordinate = {lat: t.latitude, lng: t.longitude, message: t.name}
            return coordinate
        })
    }

    return (
        <>
            <div className="container my-4">
                <h2>{movie.title} <small className="text-muted">({year})</small></h2>

                {movie.genres && movie.genres.length > 0 && (
                    <div className="mb-2">
                        {movie.genres.map(genre => <span key={genre.id} className="badge bg-primary me-2">
                            {genre.name}
                        </span>)}
                    </div>
                )}

                <p className="text-muted">Release date: {dateFormatted}</p>

                <div className="d-flex">
                    <span className="d-inline-block me-4">
                        <img src={movie.poster} style={{ width: '225px', height: '315px' }} />
                    </span>
                    <div>
                        <iframe width="565" height="315" title="trailer" allowFullScreen
                            src={getYoutubeEmbedURL(movie.trailer)}>

                        </iframe>
                    </div>
                </div>

                {movie.actors && movie.actors.length > 0 && (
                    <div>
                        <h4>Actors</h4>
                        <div className="row">
                            {movie.actors.map(actor => (
                                <div key={actor.id} className="col-md-4 d-flex mb-3">
                                    <img src={actor.picture} alt={actor.name} className="rounded me-3" 
                                        style={{width: '80px', height: '100px'}}/>
                                        <div>
                                            <strong>{actor.name}</strong>
                                            <br />
                                            <span className="text-muted">{actor.character}</span>
                                        </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {movie.theaters && movie.theaters.length > 0 && <div style={{width: '100%'}}>
                        <h2>Showing in the following theaters:</h2>
                        <Map coordinates={transformCoordinates()} allowClicks={false} />
                    </div>}
            </div>
        </>
    )
}