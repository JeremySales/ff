import React, {Fragment} from "react"
import VisibilityTwoToneIcon from '@mui/icons-material/VisibilityTwoTone';
import { WatchSeenMovie } from '../services/put';

function WatchedList(props) {
     async function watchedAgain(movieName, watchCnt){
        await WatchSeenMovie(movieName, watchCnt)
        await props.fetchMovies()
    }

    return (
        <Fragment>
            <h2>Movies You Have Seen:</h2>
            <div className='wdl-container'>
                {props.movies.filter(movie => movie.watched === true)
                .map(movie => <div key={movie._id} className='wdl-movies'>
                    <VisibilityTwoToneIcon sx={{width: 35, color: "green"}} onClick={() => watchedAgain(movie.name, movie.watchCnt)}/>
                    {movie.name}
                    <span className='label'>Watched:</span>
                    {movie.watchCnt}
                    </div>)}
            </div>
        </Fragment>);
}

export default WatchedList;