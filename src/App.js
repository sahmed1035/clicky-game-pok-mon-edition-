import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import Navbar from "./components/Navbar";



class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    topscore: 0,
    score: 0
  };

  handleShuffleCards = id => {

    friends.map(friendObject => {

      if (id === friendObject.id) {
        if (friendObject.clicked === false) {

          // alert("found false");
          friendObject.clicked = true;
          this.setState({ score: this.state.score + 1, topscore: this.state.topscore + 1, friends });
          return  false;
        }
        else {
          this.setState({score: 0});
          return true;
        }
      }

      return  true;

    });
    friends.sort(() => Math.random() - 0.5);
    

  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Navbar
          score={this.state.score}
          topscore={this.state.topscore}
        />
        <Title>Pokémon-Clicky-Game (Characters List)</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            handleShuffleCards={this.handleShuffleCards}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;



