import React, { useState, useEffect } from "react";
import "./App.css";
import MovieList from "./components/MovieList";
// import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Search from "./components/Search";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  //getting the search response with url
  const getMovieRequest = async () => {
    //request
    const url = "http://www.omdbapi.com/?s=avengers&apikey=369f95e3";

    const response = await fetch(url);
    const responseJson = await response.json();
    console.log(responseJson);
    setMovies(responseJson.Search);
  };

  useEffect(() => {
    getMovieRequest();
  }, []);

  return (
    <div className="app">
      <Header heading="Shoppies" />
      <Search />
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
