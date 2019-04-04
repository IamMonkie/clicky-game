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

  selectBird = id => {
    // Filter this.state.bird for bird with an id not equal to the id being removed
    // const birds = this.state.birds.find(bird => bird.id === id);

    console.log("clicked the bird: id= " + id);

    // check if bird has been clicked
    if (this.selected.includes(id)) {
      // this.selected[id] = true;
      this.setState({ message: "You Lose", win: 1 });
    } else {
      this.selected.push(id);

      // increment score
      let increase = this.state.topScore;
      increase += 1;

      // update score
      if (increase > this.state.topScore) {
        this.setState({
          topScore: increase,
          currentScore: increase
        });
      } else {
        this.setState({ currentScore: increase });
      }
    }
    console.log("selected: [ " + this.selected + " ]");
  };

  // restart
  restart = () => {
    this.selected = [];
    this.setState({ win: 0, currentScore: 0 });
  };

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
                Score: {this.state.currentScore} | Top Score:{" "}
                {this.state.topScore}
              </p>
              {this.state.win ? (
                <div>
                  {this.state.message}{" "}
                  <button> onClick={this.restart}>Play Again</button>
                </div>
              ) : (
                <div />
              )}
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
