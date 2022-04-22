import { Component } from "react";
import Greeting from "./Greeting";

class Header extends Component {
  render() {
    return (
      <header>
        <Greeting />
      </header>
    );
  }
}

export default Header;
