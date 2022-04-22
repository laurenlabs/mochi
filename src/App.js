import { Component } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MovieLists from "./components/MovieLists";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MovieLists />
        <Footer />
      </div>
    );
  }
}

export default App;
