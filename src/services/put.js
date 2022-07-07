import axios from "axios";

export async function WatchMovie(movieName) {
    await axios.put("http://localhost:8000/", {
        name: movieName,
        watched: false,
        watchCnt: 0
    });
}

export async function WatchSeenMovie(movieName, watchCnt){
    await axios.put("http://localhost:8000/", {
        name: movieName,
        watched: true,
        watchCnt: watchCnt
    });
}