import axios from "axios";

export async function deleteMovie (movieName) {
    console.log(movieName)
    await axios.delete("http://localhost:8000/", {data: {
      movieName: movieName}
      });
};