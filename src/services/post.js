import axios from "axios";

export function PostMovie(movieName) {
    axios.post("http://localhost:8000/", {
        name: movieName,
        watched: false,
        watchCnt: 0
    });
}
