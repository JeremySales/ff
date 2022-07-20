import * as React from 'react'
import {Button, TextField} from '@mui/material';


function UserInputs(props) {
    const handleChange = Event => {
        props.setMovieName(Event.target.value)
        console.log(props.movieName)
      };


    return (
        <React.Fragment>
            <div>
            <Button onClick={props.HandleSubmit}>Add Movie</Button>
            <TextField
            label="Movie Name"
            id="name"
            value={props.movieName}
            onChange={handleChange}/>
            <Button onClick={props.resetInputField}>Reset</Button>
            </div>
        </React.Fragment>
        
    )
}

export default UserInputs