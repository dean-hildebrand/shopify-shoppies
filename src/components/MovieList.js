import React from "react";
import "../css/MovieList.css";

function MovieList(props) {
  return (
    <div className="movie-list">
      {props.movies.map((movie, index) => (
        <div className="movie" key={index}>
          <h2>{movie.Title}</h2>
          <p>Released in: {movie.Year}</p>
          <img src={movie.Poster} alt={movie.Title} />
          <button>Nominate</button>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
