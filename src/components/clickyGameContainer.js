import React, { Component } from "react";
import NavTabs from "./NavTabs";
import Home from "./pages/Home";

class birdBrainContainer extends Component {
  state = {
    currentPage: "Home"
  };

  // uncomment if addition pages are added
  // handlePageChange = page => {
  //   this.setState({ currentPage: page });
  // };

  // handleRender = () => {
  //   if (this.state.currentPage === "Home") {
  //     return <Home />;
  //   }
  // };

  render() {
    return (
      <div>
        <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {this.handleRender()}
      </div>
    );
  }
}

export default birdBrainContainer;
