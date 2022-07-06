import { getWatchList } from '../hooks/get';
import React, {useState, useEffect} from "react"

function WatchList() {
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
            <h2>Movies to Watch:</h2>
            <div>
                {movies.filter(movie => movie.watched === false).map(movie => <div key={movie.name}>{movie.name}</div>)}
            </div>
        </main>);
}

export default WatchList;