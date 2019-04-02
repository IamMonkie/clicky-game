import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from "./components/wrapper/wrapper";
import BirdCard from "./components/BirdCard/birdCard";
import birds from "./birds.json";
import Title from "./components/Title/index";

class App extends Component {
  // Setting this.state.birds to the birds json array
  state = {
    birds,
    currentScore: 0,
    topScore: 0,
    wins: 0
  };

  selected = [];
  currentScore = 0;
  topScore = 0;

  selectBird = id => {
    // Filter this.state.bird for bird with an id not equal to the id being removed
    const birds = this.state.birds.find(bird => bird.id === id);
    if (!this.selected[id]) {
      console.log("not selected");
      this.selected[id] = true;
      this.currentScore++;

      //check for top score
      if (this.currentScore > this.topScore) {
        this.topScore = this.currentScore;
      }
      console.log("Score: " + this.topScore + this.selected[id]);
    } else if (this.selected[id] === true) {
      this.selected = {};
      this.currentScore = 0;
      console.log("Score: " + this.currentScore);
    }

    // Set this.state.birds equal to the new birds array
    this.setState({ birds });
  };

  // Map over this.state.birds and render a BirdCard component for each bird object
  render() {
    return (
      <Wrapper>
        {/* <div>
          <nav className="navbar">
            <ul>
              <li className="title">Clicky Game</li>

              <li className="score">
                Score: {this.currentScore} | Top Score: {this.topScore}
              </li>
            </ul>
          </nav>
        </div> */}
        <Title>
          Welcome to Birdbrain
          <span>
            <h3>
              <p id="subtitle">Select each bird only once</p>
            </h3>
          </span>
          <span>
            <h3>
              <p id="score">
                Score: {this.currentScore} | Top Score: {this.topScore}
              </p>
            </h3>
            <p>
              <hr />
            </p>
          </span>
        </Title>

        {this.state.birds.map(bird => (
          <BirdCard
            selectBird={this.selectBird}
            id={bird.id}
            key={bird.id}
            image={bird.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
