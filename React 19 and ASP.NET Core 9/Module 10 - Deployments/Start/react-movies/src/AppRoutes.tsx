import { Route, Routes } from "react-router";
import IndexGenres from "./features/genres/components/IndexGenres";
import LandingPage from "./features/home/components/LandingPage";
import CreateGenre from "./features/genres/components/CreateGenre";
import EditGenre from "./features/genres/components/EditGenre";
import FilterMovies from "./features/movies/components/FilterMovies";
import MovieDetail from "./features/movies/components/MovieDetail";
import CreateMovie from "./features/movies/components/CreateMovie";
import EditMovie from "./features/movies/components/EditMovie";
import IndexActors from "./features/actors/components/IndexActors";
import CreateActor from "./features/actors/components/CreateActor";
import EditActor from "./features/actors/components/EditActor";
import IndexTheaters from "./features/theaters/components/IndexTheaters";
import CreateTheater from "./features/theaters/components/CreateTheater";
import EditTheater from "./features/theaters/components/EditTheater";
import HandleRouteNotFound from "./features/home/components/HandleRouteNotFound";
import ProtectRoute from "./features/security/components/ProtectRoute";
import Register from "./features/security/components/Register";
import Login from "./features/security/components/Login";
import IndexUsers from "./features/security/components/IndexUsers";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<LandingPage />} />

            <Route element={<ProtectRoute claims={['isadmin']} />}>
                <Route path='/genres' element={<IndexGenres />} />
                <Route path='/genres/create' element={<CreateGenre />} />
                <Route path='/genres/edit/:id' element={<EditGenre />} />

                <Route path='/actors' element={<IndexActors />} />
                <Route path='/actors/create' element={<CreateActor />} />
                <Route path='/actors/edit/:id' element={<EditActor />} />

                <Route path='/theaters' element={<IndexTheaters />} />
                <Route path='/theaters/create' element={<CreateTheater />} />
                <Route path='/theaters/edit/:id' element={<EditTheater />} />

                <Route path='/movies/create' element={<CreateMovie />} />
                <Route path='/movies/edit/:id' element={<EditMovie />} />
                <Route path="/users" element={<IndexUsers /> } />
            </Route>

            <Route path='/movies/filter' element={<FilterMovies />} />
            <Route path='/movie/:id' element={<MovieDetail />} />

            <Route path="/register" element={<Register /> } />
            <Route path="/login" element={<Login /> } />

            


            <Route path='*' element={<HandleRouteNotFound />} />

        </Routes>
    )
}