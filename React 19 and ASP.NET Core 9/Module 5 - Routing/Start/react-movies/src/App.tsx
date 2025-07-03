import { useEffect, useState } from "react"
import MoviesList from "./features/movies/components/MoviesList"
import type Movie from "./features/movies/models/movie.model"
import Button from "./components/Button";

function App() {

  const [movies, setMovies] = useState<AppState>({});

  useEffect(() => {
    const inTheaters: Movie[] = [
      {
        id: 1,
        title: 'The Wild Robot',
        poster: 'https://upload.wikimedia.org/wikipedia/en/7/70/The_Wild_Robot_poster.jpg'
      },
      {
        id: 2,
        title: 'Sonic 3',
        poster: 'https://upload.wikimedia.org/wikipedia/en/f/f2/Sonic_the_Hedgehog_3_film_poster.jpg'
      }
    ]

    const upcomingReleases: Movie[] = [
      {
        id: 3,
        title: 'Spider-Man: Far From Home',
        poster: 'https://upload.wikimedia.org/wikipedia/en/b/bd/Spider-Man_Far_From_Home_poster.jpg'
      }
    ]

    setTimeout(() => {
      setMovies({ inTheaters, upcomingReleases })
    }, 500);
  }, [])

  return (
    <>
      <div className="container">

        <Button>Click me (custom)</Button>

        <h3>In Theaters</h3>
        <MoviesList movies={movies.inTheaters} />

        <h3>Upcoming Releases</h3>
        <MoviesList movies={movies.upcomingReleases} />
      </div>
    </>
  )
}

interface AppState {
  inTheaters?: Movie[];
  upcomingReleases?: Movie[];
}

export default App
