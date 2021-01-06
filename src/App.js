import React, { useState, useEffect } from "react";
import "./App.css";
import MovieList from "./components/MovieList";
// import Navbar from "./components/Navbar";
import Heading from "./components/Heading";
import Search from "./components/Search";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [nominatedMovie, setNominatedMovie] = useState([]);

  //getting the search response with url
  const getMovieRequest = async (searchValue) => {
    //request
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=369f95e3`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  //nominating a movie
  const nominateMovie = (movie) => {
    const nominated = [...nominatedMovie, movie];
    setNominatedMovie(nominated);
  };

  const removeNominated = (movie) => {
    debugger
    const newNominatedList = nominatedMovie.filter(
      (nominatedMovie) => nominatedMovie.imdbID != movie.imdbID
    );
    setNominatedMovie(newNominatedList);
  };

  return (
    <div className="app">
      <Heading heading="Shoppies" />
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className="movie-search-list">
        <MovieList movies={movies} handleNominatedClick={nominateMovie} />
      </div>
      <div className="nominate-heading">
        <Heading heading="Nominated Movies" />
      </div>
      <div className="nominated-movie-list">
        <MovieList
          movies={nominatedMovie}
          handleNominatedClick={removeNominated}
        />
      </div>
    </div>
  );
}

export default App;
