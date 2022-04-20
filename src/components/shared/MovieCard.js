import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div style={{ width: "25%" }} key={movie.id}>
        <img
            src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}?api_key=4d5518b590c977b2af5bcda4493ff02f`}
            alt={`${movie.title} movie poster`}
        ></img>
        <p>{movie.title}</p>
        <p>{movie.vote_average}</p>
        <p>{movie.vote_count}</p>
        <p>{movie.overview}</p>
    </div>
  );
};

export default MovieCard;
