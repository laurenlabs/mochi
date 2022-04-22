import MovieCard from "./shared/MovieCard";
import React from "react";
import PropTypes from "prop-types";

const MovieList = ({ listTitle, list }) => (
  <div className="movie-list-container">
    <h2>{listTitle}</h2>
    <div className="movie-list">
      {list.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  </div>
);

MovieList.propTypes = {
  listTitle: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired
};

export default MovieList;
