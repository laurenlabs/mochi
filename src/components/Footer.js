import { Component } from "react";

class Footer extends Component {
  getYear() {
    const currentYear = new Date().getFullYear();
    return currentYear;
  }

  render() {
    return <footer>&copy; {this.getYear()}</footer>;
  }
}

export default Footer;
