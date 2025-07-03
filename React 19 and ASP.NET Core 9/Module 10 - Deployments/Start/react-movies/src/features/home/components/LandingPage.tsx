import { useState, useEffect } from "react";
import MoviesList from "../../movies/components/MoviesList";
import type LandingPageDTO from "../models/LandingPageDTO";
import apiClient from "../../../api/apiClient";
import AlertContext from "../../../utils/AlertContext";

export default function LandingPage() {

    const [movies, setMovies] = useState<LandingPageDTO>({});

    useEffect(() => {
        loadRecords();
    }, [])

    function loadRecords() {
        apiClient.get<LandingPageDTO>('/movies/landing').then(res => {
            setMovies(res.data);
        });
    }

    return (
        <>
            <AlertContext.Provider value={() => loadRecords()}>
                <h3>In Theaters</h3>
                <MoviesList movies={movies.inTheaters} />

                <h3>Upcoming Releases</h3>
                <MoviesList movies={movies.upcomingReleases} />
            </AlertContext.Provider>
        </>
    )
}