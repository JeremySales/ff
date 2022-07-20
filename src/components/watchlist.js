import React from "react"
import VisibilityTwoToneIcon from '@mui/icons-material/VisibilityTwoTone';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { WatchMovie } from '../services/put';
import { deleteMovie } from '../services/del';
import WatchedList from './watchedlist';

function WatchList(props) {
    async function updateMovie(movieName){
        await WatchMovie(movieName)
        await props.fetchMovies()
    };

    async function reMovie(movieName){
        await deleteMovie(movieName)
        await props.fetchMovies()
    };

    return (
        <React.Fragment>
            <h2>Movies to Watch:</h2>
            <div className='wl-container'>
                {props.movies.filter(movie => movie.watched === false)
                .map(movie => <div key={movie._id} className="wl-movies">
                    <VisibilityTwoToneIcon sx={{width: 35}} onClick={() => updateMovie(movie.name)}/>
                    {movie.name}  
                    <DeleteForeverIcon sx={{color: 'red', width: 35}} onClick={() => reMovie(movie.name)} />
                    </div>)}
            </div>
            <WatchedList movies={props.movies} fetchMovies={props.fetchMovies}/>
        </React.Fragment>);
}

export default WatchList;