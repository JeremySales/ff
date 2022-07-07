import { getWatchList } from '../services/get';
import React, {useState, useEffect} from "react"
import VisibilityTwoToneIcon from '@mui/icons-material/VisibilityTwoTone';
import { WatchSeenMovie } from '../services/put';

function WatchedList() {
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

    async function watchedAgain(movieName, watchCnt){
        await WatchSeenMovie(movieName, watchCnt)
        await fetchMovies()
    }

    return (
        <main>
            <h2>Movies you have seen</h2>
            <div className='wdl-container'>
                {movies.filter(movie => movie.watched === true).map(movie => <div key={movie._id} className='wdl-movies'><VisibilityTwoToneIcon sx={{width: 35}} onClick={() => watchedAgain(movie.name, movie.watchCnt)}/>{movie.name}<span className='label'>Watched:</span>{movie.watchCnt}</div>)}
            </div>
        </main>);
}

export default WatchedList;