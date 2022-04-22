import { useEffect, useState } from "react";
import Button from './shared/Button';
import MovieList from "./MovieList";

function MovieLists() {
  const listTitles = ["Popular", "Now Playing", "Top Rated", "Upcoming"];
  const [listToGet, setListToGet] = useState("popular");
  const [selectedListTitle, setSelectedListTitle] = useState(listTitles[0]);
  const [selectedList, setSelectedList] = useState([]);
  const [popularList, setPopularList] = useState([]);
  const [nowPlayingList, setNowPlayingList] = useState([]);
  const [topRatedList, setTopRatedList] = useState([]);
  const [upcomingList, setUpcomingList] = useState([]);

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
          console.log(error);
        },
      );
  };

  return (
    <main>
      <div className="list-button-container">
        {listTitles.map((title) => (
          <Button
            onClick={() => {
              handleClick(title);
            }}
            key={title}
            label={title}
            className="list-button"
          />
        ))}
      </div>
      {selectedList ? (
        <MovieList listTitle={selectedListTitle} list={selectedList} />
      ) : null}
    </main>
  );
}

export default MovieLists;
