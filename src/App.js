import { Component } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Greeting from "./components/Greeting";
import Header from "./components/Header";
import Home from "./components/Home";
import Movie from "./components/Movie";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {/* TODO: Add react-router here */}
        <Greeting />
        <Movie />
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;
