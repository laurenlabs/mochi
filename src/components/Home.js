import { useEffect, useState } from 'react';
import Greeting from './Greeting';
import MovieList from './MovieList';

function HomePage() {
  const listTitles = ["Popular", "Now Playing", "Latest", "Top Rated", "Upcoming"];
  const [selectedListTitle, setSelectedListTitle] = useState(listTitles[0]);
  const [selectedList, setSelectedList] = useState([]);
  const [popularList, setPopularList] = useState([]);
  const [nowPlayingList, setNowPlayingList] = useState([]);
  const [latestList, setLatestList] = useState([]);
  const [topRatedList, setTopRatedList] = useState([]);
  const [upcomingList, setUpcomingList] = useState([]);
  const [listToGet, setListToGet] = useState("popular");

  useEffect(() => {
    getMovieList(listToGet);
  }, [listToGet]);

  const handleClick = (title) => {
    setSelectedListTitle(title);
    checkForList(title);
};

const checkForList = (title) => {
    console.log("checkForList", title);
  if (title === "Popular") {
    popularList.length === 0
      ? setListToGet("popular")
      : setSelectedList(popularList);
  } else if (title === "Now Playing") {
    nowPlayingList.length === 0
      ? setListToGet("now_playing")
      : setSelectedList(nowPlayingList);
  } else if (title === "Latest") {
    latestList.length === 0
      ? setListToGet("latest")
      : setSelectedList(latestList);
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
            console.log("setPopularList");
          } else if (listToGet === "latest") {
            setLatestList(result.results);
            console.log("setLatestList");
          } else if (listToGet === "top_rated") {
            setTopRatedList(result.results);
            console.log("setTopRatedList");
          } else if (listToGet === "now_playing") {
            setNowPlayingList(result.results);
            console.log("setNowPlayingList");
          } else if (listToGet === "upcoming") {
            setUpcomingList(result.results);
            console.log("setUpcomingList");
          }
          console.log("setSelectedList");

          setSelectedList(result.results);
        },
        // (error) => {
        //   this.setState({
        //     isLoaded: true,
        //     error,
        //   });
        // }
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
      <MovieList listTitle={selectedListTitle} list={selectedList} />
    </main>
  );
}

export default HomePage;
