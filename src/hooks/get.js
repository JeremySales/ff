import axios from "axios";

export function getWatchList() {
    return axios.get("http://localhost:8000/").then((response) => response.data)
}