import { useForm, type SubmitHandler } from "react-hook-form"
import type FilterMoviesDTO from "../models/FilterMoviesDTO.model"
import Button from "../../../components/Button";
import MoviesList from "./MoviesList";
import Pagination from "../../../components/Pagination";
import { useFilterMovies } from "../hooks/useFilterMovies";

export default function FilterMovies() {

    const initialValues: FilterMoviesDTO = {
        title: '',
        genreId: 0,
        inTheaters: false,
        upcomingReleases: false
    }

    const { register, handleSubmit, reset, setValue, formState: { isSubmitting } } = useForm<FilterMoviesDTO>({
        defaultValues: initialValues
    })

    const onSubmit: SubmitHandler<FilterMoviesDTO> = async (data) => {
        await useFilterMoviesHook.loadRecords(data);
    }

    const useFilterMoviesHook = useFilterMovies(initialValues, setValue);


    return (
        <>
            <h3>Filter Movies</h3>
            <form className="row row-cols-lg-auto g-3 align-items-center"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="col-12">
                    <input placeholder="Movie title" autoComplete="off" className="form-control"
                        {...register('title')} />
                </div>
                <div className="col-12">
                    <select className="form-select" {...register('genreId')}>
                        <option value="0">--Select a genre--</option>
                        {useFilterMoviesHook.genres.map(genre => <option
                            key={genre.id} value={genre.id}>{genre.name}</option>)}
                    </select>
                </div>
                <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="upcomingReleases"
                            {...register('upcomingReleases')} />
                        <label className="form-check-label" htmlFor="upcomingReleases">
                            Upcoming releases
                        </label>
                    </div>
                </div>

                <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="inTheaters"
                            {...register('inTheaters')} />
                        <label className="form-check-label" htmlFor="inTheaters">
                            In theaters
                        </label>
                    </div>
                </div>

                <div className="col-12">
                    <Button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? 'Filtering...' : 'Filter'}
                    </Button>
                    <Button className="btn btn-danger ms-2" onClick={() => {
                        reset();
                        useFilterMoviesHook.loadRecords(initialValues);
                    }}>
                        Reset
                    </Button>
                </div>

            </form>

            <div className="mt-4">
                <Pagination currentPage={useFilterMoviesHook.page} 
                recordsPerPage={useFilterMoviesHook.recordsPerPage}
                    totalAmountOfRecords={useFilterMoviesHook.totalAmountOfRecords}
                    recordsPerPageOptions={[5, 20, 50]}
                    onPaginateChange={(page, recordsPerPage) => {
                        useFilterMoviesHook.setPage(page);
                       useFilterMoviesHook.setRecordsPerPage(recordsPerPage)
                    }}
                />
            </div>

            <div className="mt-4">
                <MoviesList movies={useFilterMoviesHook.movies} />
            </div>
        </>
    )
}