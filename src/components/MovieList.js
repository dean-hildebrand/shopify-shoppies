import React from "react";

function MovieList(props) {
  return (
    <div className="movie-list">
      {props.movies.map((movie, index) => (
        <div>
          <h2>{movie.Title}</h2>
          <img src={movie.Poster} alt={movie.Title} />
        </div>
      ))}
    </div>
  );
}

export default MovieList;
