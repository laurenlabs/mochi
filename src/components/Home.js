import { useEffect, useState } from 'react';
import PopularList from "./PopularList";

function HomePage() {
  const lists = ["Latest", "Now Playing", "Popular", "Top Rated", "Upcoming"];

  const [currentList, setList] = useState(lists[0]);
    // useEffect(() => updateCurrentList, [currentList]);
    const updateCurrentList = ({ title }) => setList(title);

  return (
    <main style={{ maxWidth: "1024px" }}>
      <div class="list-wrapper">
        <div>
          {lists.map((title) => (
            <button onClick={updateCurrentList(title)} key={title}>
              {title}
            </button>
          ))}
        </div>
        {currentList}
        <PopularList />
      </div>
    </main>
  );
}

export default HomePage;
