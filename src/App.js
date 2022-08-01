import React, {useState, useEffect} from 'react';
import './css/normalize.css'
import './App.css';
import Header from './components/header';
import {Button, TextField} from '@mui/material';
import WatchList from './components/watchlist';
import { PostMovie } from './services/post';
import { getWatchList } from './services/get';

function App() {
  const [movieName, setMovieName] = useState("");

    useEffect( () => {
        setMovieName();
        fetchMovies();
    }, []);

    const [movies, setMovies] = useState([]);
    
    async function fetchMovies() {
        try {
            const movies = await getWatchList();
            setMovies(movies);
        } catch (err) {
            console.log(err);
        };
    };

    const handleChange = Event => {
      setMovieName(Event.target.value)
    };

  async function HandleSubmit() {
    await PostMovie(movieName);
    await setMovieName("");
    await fetchMovies();
};

const resetInputField = () => {
  setMovieName("");
};
    return (
      <div className="App">
        <Header />
        <div className='inputCntls'>
            <Button onClick={HandleSubmit} variant="contained" color='success'>Add Movie</Button>
            <TextField
            label="Movie Name"
            id="name"
            value={movieName || ''}
            onChange={handleChange}
            fullWidth
            margin='normal'/>
            <Button onClick={resetInputField} variant="contained" color='error'>Reset</Button>
            </div>
        <WatchList  movies = {movies} setMovies = {setMovies} fetchMovies = {fetchMovies}/>
      </div>
    );
  };

export default App;
