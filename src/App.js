import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import NavTabs from "./components/NavTabs";
import Wrapper from "./components/wrapper";
import BirdCard from "./components/BirdCard";
import birds from "./birds.json";
import Title from "./components/Title";

class App extends Component {
  // Setting this.state.birds to the birds json array
  state = {
    birds
  };

  removeBird = id => {
    // Filter this.state.bird for bird with an id not equal to the id being removed
    const birds = this.state.birds.filter(bird => bird.id !== id);
    // Set this.state.birds equal to the new birds array
    this.setState({ birds });
  };

  // Map over this.state.birds and render a BirdCard component for each bird object
  render() {
    return (
      <Wrapper>
        <Title>Select a bird</Title>
        {this.state.birds.map(bird => (
          <BirdCard
            removeBird={this.removeBird}
            id={bird.id}
            key={bird.id}
            name={bird.name}
            image={bird.image}
            occupation={bird.occupation}
            location={bird.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
