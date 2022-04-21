import { useEffect, useState } from "react";
import Greeting from "./Greeting";
import MovieList from "./MovieList";

function HomePage() {
  const listTitles = ["Popular", "Now Playing", "Top Rated", "Upcoming"];
  const [listToGet, setListToGet] = useState("popular");
  const [selectedListTitle, setSelectedListTitle] = useState(listTitles[0]);
  const [selectedList, setSelectedList] = useState([]);
  const [popularList, setPopularList] = useState([]);
  const [nowPlayingList, setNowPlayingList] = useState([]);
  const [topRatedList, setTopRatedList] = useState([]);
  const [upcomingList, setUpcomingList] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getMovieList(listToGet);
  }, [listToGet]);

  const handleClick = (title) => {
    setSelectedListTitle(title);
    checkForList(title);
  };

  const checkForList = (title) => {
    if (title === "Popular") {
      popularList.length === 0
        ? setListToGet("latest")
        : setSelectedList(popularList);
    } else if (title === "Now Playing") {
      nowPlayingList.length === 0
        ? setListToGet("now_playing")
        : setSelectedList(nowPlayingList);
    } else if (title === "Top Rated") {
      topRatedList.length === 0
        ? setListToGet("top_rated")
        : setSelectedList(topRatedList);
    } else {
      upcomingList.length === 0
        ? setListToGet("upcoming")
        : setSelectedList(upcomingList);
    }
  };

  const getMovieList = (listToGet) => {
    fetch(
      `https://api.themoviedb.org/3/movie/${listToGet}?api_key=4d5518b590c977b2af5bcda4493ff02f`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          if (listToGet === "popular") {
            setPopularList(result.results);
          } else if (listToGet === "top_rated") {
            setTopRatedList(result.results);
          } else if (listToGet === "now_playing") {
            setNowPlayingList(result.results);
          } else if (listToGet === "upcoming") {
            setUpcomingList(result.results);
          }
          setSelectedList(result.results);
        },
        (error) => {
            setHasError(error);
        },
        setIsLoading(false)
      );
  };

  return (
    <main style={{ maxWidth: "1024px" }}>
      <Greeting />
      <div>
        {listTitles.map((title) => (
          <button
            onClick={() => {
              handleClick(title);
            }}
            key={title}
          >
            {title}
          </button>
        ))}
      </div>
      {hasError
        ? "There has been an error with your request. Please try again."
        : null}
      {isLoading ? `${selectedList} is Loading...` : null}
      <MovieList listTitle={selectedListTitle} list={selectedList} />
    </main>
  );
}

export default HomePage;
