import { Component } from "react";

class PopularList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      popularMovies: {},
    };
  }

  componentDidMount() {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=4d5518b590c977b2af5bcda4493ff02f"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            popularMovies: result.results,
          });
          console.log("RESULTS", this.state.popularMovies);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded, popularMovies } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div
          style={{
            display: "flex",
            maxWidth: "100%",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {popularMovies.map((movie) => (
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
          ))}
        </div>
      );
    }
  }
}

export default PopularList;
