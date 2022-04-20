import React, { Component } from "react";
import MovieCard from "./shared/MovieCard";

class MovieList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      movies: [],
    };
  }

  render() {
    const { error, isLoaded, movies } = this.state;

    // if (error) {
    //   return <p>Error: {error.message}</p>;
    // } else if (!isLoaded) {
    //   <p>Loading {listTitle}...</p>;
    // } else {
      return (
        <div className="list-wrapper">
          <h3>{this.props.listTitle}</h3>
          <div
            style={{
              display: "flex",
              maxWidth: "100%",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            {movies.map((movie) => (
              <MovieCard movie={movie}/>
            ))}
          </div>
        </div>
      );
    // }
  }
};

export default MovieList;
