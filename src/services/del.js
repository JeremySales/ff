import axios from "axios";

export async function deleteMovie (movieName) {
    await axios.delete("http://localhost:8000/", {data: {
      name: movieName}
      });
};