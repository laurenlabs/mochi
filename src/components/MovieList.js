import MovieCard from "./shared/MovieCard";
import React from "react";
import PropTypes from "prop-types";

const MovieList = ({ error, isLoaded, listTitle, list }) => (
  <div className="list-wrapper">
    <h3>{listTitle}</h3>
    <div
      style={{
        display: "flex",
        maxWidth: "100%",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      {list.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  </div>
);

MovieList.propTypes = {
  error: PropTypes.string,
  isLoaded: PropTypes.bool,
  listTitle: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired
};

MovieList.defaultProps = {
  error: "",
  isLoaded: false,
};

export default MovieList;
