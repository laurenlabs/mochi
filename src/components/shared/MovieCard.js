import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card" key={movie.id}>
      <img
        src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}?api_key=4d5518b590c977b2af5bcda4493ff02f`}
        alt={`${movie.title} movie poster`}
      ></img>
      <div className="movie-details">
        <p className="movie-title">{movie.title}</p>
        <p>Rating: {movie.vote_average}</p>
        <p># of Votes: {movie.vote_count}</p>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
};

export default MovieCard;
