import { useState, useEffect } from "react";
import { useSearchParams } from "react-router";
import apiClient from "../../../api/apiClient";
import type Genre from "../../genres/models/Genre.model";
import type FilterMoviesDTO from "../models/FilterMoviesDTO.model";
import type Movie from "../models/movie.model";
import type { UseFormSetValue } from "react-hook-form";

export function useFilterMovies(initialValues: FilterMoviesDTO, setValue: UseFormSetValue<FilterMoviesDTO>){
      const [genres, setGenres] = useState<Genre[]>([]);
        const [movies, setMovies] = useState<Movie[]>();
        const [searchParams, setSearchParams] = useSearchParams();
        const [page, setPage] = useState(searchParams.has('page') ? parseInt(searchParams.get('page')!, 10) : 1);
        const [recordsPerPage, setRecordsPerPage] = 
            useState(searchParams.has('recordsPerPage') ? parseInt(searchParams.get('recordsPerPage')!, 10) : 5);
        const [totalAmountOfRecords, setTotalAmountOfRecords] = useState(0);
    
        useEffect(() => {
            apiClient.get<Genre[]>('/genres/all').then(res => setGenres(res.data))
        }, [])
    
        useEffect(() => {
            if (genres.length === 0) {
                return;
            }
    
            if (searchParams.has('title')){
                initialValues.title = searchParams.get('title')!;
                setValue('title', initialValues.title);
            }
    
             if (searchParams.has('genreId')){
                initialValues.genreId =  parseInt(searchParams.get('genreId')!, 10);
                setValue('genreId', initialValues.genreId);
            }
    
             if (searchParams.has('upcomingReleases')){
                initialValues.upcomingReleases = Boolean(searchParams.get('upcomingReleases')!);
                setValue('upcomingReleases', initialValues.upcomingReleases);
            }
    
            if (searchParams.has('inTheaters')){
                initialValues.inTheaters = Boolean(searchParams.get('inTheaters')!);
                setValue('inTheaters', initialValues.inTheaters);
            }
    
            loadRecords(initialValues);
    
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [genres, page, recordsPerPage])
    
        async function loadRecords(values: FilterMoviesDTO) {
            modifyURL(values);
            const response = await apiClient.get<Movie[]>('/movies/filter', { params: { ...values, page, recordsPerPage } });
            setMovies(response.data);
            const totalAmountOfRecords = parseInt(response.headers['total-records-count'], 10);
            setTotalAmountOfRecords(totalAmountOfRecords);
        }

         function modifyURL(values: FilterMoviesDTO) {
        const params = new URLSearchParams();

        if (values.title) {
            params.set('title', values.title);
        }

        if (values.genreId) {
            params.set('genreId', String(values.genreId));
        }

        if (values.inTheaters) {
            params.set('inTheaters', String(values.inTheaters));
        }

        if (values.upcomingReleases) {
            params.set('upcomingReleases', String(values.upcomingReleases));
        }

        params.set('page', String(page));
        params.set('recordsPerPage', String(recordsPerPage));

        setSearchParams(params);
    }

    return {loadRecords, genres, page, recordsPerPage, totalAmountOfRecords, setPage, setRecordsPerPage, movies}
}