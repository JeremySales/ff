import { getWatchList } from '../services/get';
import React, {useState, useEffect} from "react"
import VisibilityTwoToneIcon from '@mui/icons-material/VisibilityTwoTone';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { WatchMovie } from '../services/put';
import { deleteMovie } from '../services/del';
import WatchedList from './watchedlist';

function WatchList(props) {
    const [movies, setMovies] = useState([]);
    
    async function fetchMovies() {
        try {
            const movies = await getWatchList();
            setMovies(movies);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect( () => {
        fetchMovies();
    }, []);

    async function updateMovie(movieName){
        await WatchMovie(movieName)
        await fetchMovies()
    };

    async function reMovie(movieName){
        await deleteMovie(movieName)
        await fetchMovies()
    };

    return (
        <React.Fragment>
            <h2>Movies to Watch:</h2>
            <div className='wl-container'>
                {movies.filter(movie => movie.watched === false).map(movie => <div key={movie._id} className="wl-movies"><VisibilityTwoToneIcon sx={{width: 35}} onClick={() => updateMovie(movie.name)}/>{movie.name}  <DeleteForeverIcon sx={{color: 'red', width: 35}} onClick={() => reMovie(movie.name)} /></div>)}
            </div>
            <WatchedList />
        </React.Fragment>);
}

export default WatchList;