import { getWatchList } from '../services/get';
import React, {useState, useEffect} from "react"

function WatchedList() {
    const [movies, setMovies] = useState([]);

    useEffect( () => {
        async function fetchMovies() {
            try {
                const movies = await getWatchList();
                setMovies(movies);
            } catch (err) {
                console.log(err);
            }
        }
        fetchMovies();
    }, []);
    return (
        <main>
            <h2>Movies you have seen</h2>
            <div>
                {movies.filter(movie => movie.watched === true).map(movie => <div key={movie.name}>{movie.name}</div>)}
            </div>
        </main>);
}

export default WatchedList;