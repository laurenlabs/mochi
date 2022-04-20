import { useState } from 'react';
import Greeting from './Greeting';
import MovieList from './MovieList';

function HomePage() {
  const lists = ["Latest", "Now Playing", "Popular", "Top Rated", "Upcoming"];

  const [selectedList, setSelectedList] = useState(lists[0]);

  const handleClick = (title) => setSelectedList(title);
  console.log('selected list', selectedList)
       
  return (
    <main style={{ maxWidth: "1024px" }}>
      <Greeting />
      <div>
        {lists.map((title) => (
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
      <MovieList listTitle={selectedList} />
    </main>
  );
}

export default HomePage;
