import axios from "axios";

export  function deleteMovie (movieName) {
    axios.delete("http://localhost:8000/", {data: {
      name: movieName}
      });
};