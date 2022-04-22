import { Component } from "react";

class Footer extends Component {
  getYear() {
    const currentYear = new Date().getFullYear();
    return currentYear;
  }

  render() {
    return (
      <footer>
        <p>&copy; {this.getYear()}</p>
      </footer>
    );
  }
}

export default Footer;
