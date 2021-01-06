import React from "react";
import "../css/MovieList.css";

function MovieList(props) {
  const NominatedComponent = props.nominatedComponent;
  return (
    <div className="movie-list-container">
      {props.movies.map((movie, index) => (
        <div className="movie" key={index}>
          <h2>{movie.Title}</h2>
          <p className="movie-year">{movie.Year}</p>

          <img className="movie-img" src={movie.Poster} alt={movie.Title} />
          <div
            className="overlay"
            onClick={() => props.handleNominatedClick(movie)}
          >
            <NominatedComponent />
          </div>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
