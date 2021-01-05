import axios from "axios";

//base url to request movies from db
const instance = axios.create({
  baseURL: "http://www.omdbapi.com/?apikey=369f95e3&s=",
});

export default instance;
