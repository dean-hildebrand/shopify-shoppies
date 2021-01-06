import React, { useState, useEffect } from "react";
import "./App.css";
import MovieList from "./components/MovieList";
// import Navbar from "./components/Navbar";
import Heading from "./components/Heading";
import Search from "./components/Search";
import AddNominated from "./components/AddNominated";
import RemoveNominated from "./components/RemoveNominated";
import swal from 'sweetalert';


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
    //checks the id to make sure one one of each movie is nominated
    if (nominatedMovie.includes(movie)) {
      return nominatedMovie && swal("Already Nominated");
    }
    //checks to see that only 5 movies can be nominated
    if (nominatedMovie.length <= 4) {
      const nominated = [...nominatedMovie, movie];
      setNominatedMovie(nominated);
    } else {
      swal("You can only nominate 5 movies, sorry");
    }
  };

  //use api id to filter favorites, removing the unwanted movie
  const removeNominated = (movie) => {
    const newNominatedList = nominatedMovie.filter(
      (nominatedMovie) => nominatedMovie.imdbID !== movie.imdbID
    );
    setNominatedMovie(newNominatedList);
  };

  return (
    <div className="app">
      <Heading heading="Shopify-Shoppies" />
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className="movie-search-list">
        <div className="row">
          <MovieList
            movies={movies}
            nominatedComponent={AddNominated}
            handleNominatedClick={nominateMovie}
          />
        </div>
      </div>
      <div className="nominate-heading">
        <Heading heading="Nominated Movies" />
      </div>
      <div className="nominated-movie-list">
        <MovieList
          movies={nominatedMovie}
          handleNominatedClick={removeNominated}
          nominatedComponent={RemoveNominated}
        />
      </div>
    </div>
  );
}

export default App;
