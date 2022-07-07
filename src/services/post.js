import axios from "axios";

export async function PostMovie(movieName) {
    await axios.post("http://localhost:8000/", {
        name: movieName,
        watched: false,
        watchCnt: 0
    });
    await axios.get("http://localhost:8000/").then((response) => response.data)
}
