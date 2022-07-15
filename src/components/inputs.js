import * as React from 'react'
import {Button, TextField} from '@mui/material';
import { PostMovie } from '../services/post';
import WatchList from './watchlist';

function UserInputs() {
    const [movieName, setMovieName] = React.useState("");

    const handleChange = Event => {
        setMovieName(Event.target.value)
      };

    const resetInputField = () => {
        setMovieName("")
    };

    async function HandleSubmit(Event) {
        Event.preventDefault();
        await PostMovie(movieName)
        setMovieName("")
    }

    return (
        <React.Fragment>
            <div>
            <Button onClick={HandleSubmit}>Add Movie</Button>
            <TextField
            label="Movie Name"
            id="name"
            value={movieName}
            onChange={handleChange}/>
            <Button onClick={resetInputField}>Reset</Button>
            <WatchList />
            </div>
        </React.Fragment>
        
    )
}

export default UserInputs