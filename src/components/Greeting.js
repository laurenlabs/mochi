import { Component } from "react";

class Greeting extends Component {
  getGreeting() {
    const currentTime = new Date().getHours();
    const possibleGreetings = [
      "Good morning",
      "Good afternoon",
      "Good evening",
      "Good night",
    ];
    let welcomeText = "";

    if (currentTime < 12) welcomeText = possibleGreetings[0];
    else if (currentTime < 18) welcomeText = possibleGreetings[1];
    else if (currentTime < 22) welcomeText = possibleGreetings[2];
    else welcomeText = possibleGreetings[3];
    return welcomeText;
  }

  render() {
    return (
      <>
        <h3>Welcome to Movie Lists</h3>
        <h4>{this.getGreeting()}</h4>
      </>
    );
  }
}

export default Greeting;
