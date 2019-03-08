import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import Navbar from "./components/Navbar";

let score = 0;
let topscore = 0;

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    topscore: 0,
    score: 0
  };

  shuffleCards = id => {
    let friends = this.state.friends;
    let friendClick = friends.filter(friend => friend.id === id);

    // already clicked clicked=true
    if (friendClick.clicked) {
      score = 0;

      // the value of all the cards is reinitialized to false
      for (let i = 0; i < friends.length; i++) {
        friends[i].clicked = false;
      }
      this.setState({ friends, score });
    }

    else {
      friendClick.clicked = true;
      score++;

      friends.sort(() => Math.random() - 0.5);
      this.setState({ friends, score });

      //topscore
      if (score > topscore) {
        topscore = score;
        this.setState({ topscore });
      }
    }

  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Navbar 
        score = {this.state.score}
        topscore = {this.state.topscore}
        /> 
        <Title>Pokémon-Clicky-Game (Characters List)</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            shuffleCards={this.shuffleCards}
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



