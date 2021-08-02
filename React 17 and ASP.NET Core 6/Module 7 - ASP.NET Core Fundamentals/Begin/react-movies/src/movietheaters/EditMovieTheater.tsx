import MovieTheaterForm from './MovieTheaterForm';

export default function EditMovieTheater(){
    return (
        <>
            <h3>Edit Movie Theater</h3>
            <MovieTheaterForm 
                model={{name: 'Sambil', 
                latitude: 18.48262101287504, 
                longitude: -69.911767244339}}
                onSubmit={values => console.log(values)}
            />
        </>
    )
}