import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from "./components/wrapper/wrapper";
import BirdCard from "./components/BirdCard/birdCard";
import birds from "./birds.json";
import Title from "./components/Title/index";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit,
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  centering: {
    display: "flex",
    "justify-content": "center",
    "margin-top": "25px"
  },
  centeringImgs: {
    "justify-content": "center"
  }
});

const bodyStyle = {
  background: "#eceff1",
  minHeight: "100vh",
  minWidth: "100vw",
  padding: "1rem 3rem",
  backgroundImage: "url(" + "https://i.imgur.com/yggaZ5s.png" + ")",
  backgroundPosition: "top"
};

class App extends Component {
  // if gameEnd =1, restart button is displayed, else it is hidden
  // Setting this.state.birds to the birds json array
  state = {
    birds,
    message: "",
    currentScore: 0,
    topScore: /*localStorage.getItem("hiScore")
      ? localStorage.getItem("hiScore")
      :*/ 0,
    gameEnd: 0
  };

  selected = [];
  currentScore = 0;
  topScore = 0;

  selectBird = id => {
    // Filter this.state.bird for bird with an id not equal to the id being selected
    // const birds = this.state.birds.find(bird => bird.id === id);

    console.log("clicked the bird: id= " + id);

    // check if bird has been clicked
    if (this.selected.includes(id)) {
      // this.selected[id] = true;
      this.setState({ message: "You Lose", gameEnd: 1 });
    } else {
      this.selected.push(id);
      this.shuffle(birds);

      // increment score
      let increase = this.state.currentScore;
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

    this.setState({ increase: 0, gameEnd: 0, currentScore: 0 });
    console.log("restarting");
  };

  // shuffle birds
  shuffle = array => {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

  render() {
    return (
      <Wrapper>
        <div className="headerContainer">
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
                {this.state.gameEnd ? (
                  <div>
                    {this.state.message}
                    <button onClick={this.restart}>Play Again</button>
                  </div>
                ) : (
                  <div />
                )}
              </h3>

              {/* <hr /> */}
            </span>
          </Title>
        </div>
        <div className="bodyContainer" style={bodyStyle}>
          <div className={this.props.classes.centering}>
            <Grid
              container
              item
              xs={20}
              spacing={24}
              className={this.props.classes.centeringImgs}
            >
              <Grid container item xs={20} spacing={24}>
                {this.state.birds.map(bird => {
                  return (
                    <>
                      <Grid item xs={4}>
                        <BirdCard
                          selectBird={this.selectBird}
                          id={bird.id}
                          key={bird.id}
                          image={bird.image}
                        />
                      </Grid>
                    </>
                  );
                })}
              </Grid>
            </Grid>
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default withStyles(styles)(App);
