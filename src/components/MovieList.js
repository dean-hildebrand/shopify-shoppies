import React from "react";
import "../css/MovieList.css";

function MovieList(props) {
  return (
    <div className="movie-list">
      {props.movies.map((movie, index) => (
        <div className='movie'>
          <h2>{movie.Title}</h2>
          <img src={movie.Poster} alt={movie.Title} />
        </div>
      ))}
    </div>
  );
}

export default MovieList;
