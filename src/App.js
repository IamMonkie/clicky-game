import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from "./components/wrapper/wrapper";
import BirdCard from "./components/BirdCard/birdCard";
import birds from "./birds.json";
import Title from "./components/Title/index";

class App extends Component {
  // if win =1, restart button is displayed, else it is hidden

  // Setting this.state.birds to the birds json array
  state = {
    birds,
    message: "",
    currentScore: 0,
    topScore: 0,
    wins: 0
  };

  selected = [];
  currentScore = 0;
  topScore = 0;
  clicked = [];

  selectBird = id => {
    // Filter this.state.bird for bird with an id not equal to the id being removed
    const birds = this.state.birds.find(bird => bird.id === id);

    console.log("clicked the bird: id= " + id);

    if (this.selected.includes(id)) {
      // this.selected[id] = true;
      this.clicked.push(id);

      let increase = this.state.currentScore;
      increase += 1;
      if (increase > this.state.topScore) {
        this.setState({
          topScore: increase,
          currentScore: increase
        });
      }

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
        <Title>
          Welcome to Birdbrain
          <span>
            <h3 id="subtitle">Select each bird only once</h3>
          </span>
          <span>
            <h3>
              <p id="score">
                Score: {this.currentScore} | Top Score: {this.topScore}
              </p>
            </h3>

            {/* <hr /> */}
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
