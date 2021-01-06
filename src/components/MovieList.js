import React from "react";
import "../css/MovieList.css";
import AddIcon from "@material-ui/icons/Add";
import { Button } from "@material-ui/core";

function MovieList(props) {
  return (
    <div className="movie-list">
      {props.movies.map((movie, index) => (
        <div className="movie" key={index}>
          <h2>{movie.Title}</h2>
          <p>Released in: {movie.Year}</p>
          <img className="movie-img" src={movie.Poster} alt={movie.Title} />

          <div className="nominate-btn">
            <Button
              variant="outlined"
              color="primary"
              onClick={() => props.handleNominatedClick(movie)}
            >
              Nominate
              <AddIcon />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
