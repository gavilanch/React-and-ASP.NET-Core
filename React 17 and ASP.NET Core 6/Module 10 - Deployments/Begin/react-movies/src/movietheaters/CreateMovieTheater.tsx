import axios from 'axios'
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { urlMovieTheaters } from '../endpoints'
import DisplayErrors from '../utils/DisplayErrors';
import { movieTheaterCreationDTO } from './movieTheater.model'
import MovieTheaterForm from './MovieTheaterForm'

export default function CreateMovieTheater(){

    const history = useHistory();
    const [errors, setErrors] = useState<string[]>([]);

    async function create(movieTheater: movieTheaterCreationDTO){
        try {
            await axios.post(urlMovieTheaters, movieTheater);
            history.push("/movietheaters");
        }
        catch(error){
            if (error && error.response){
                setErrors(error.response.data);
            }
        }
    }

    return (
        <>
            <h3>Create Movie Theater</h3>
            <DisplayErrors errors={errors} />
            <MovieTheaterForm 
                model={{name: ''}}
                onSubmit={async values => await create(values)}
            />
        </>
    )
}