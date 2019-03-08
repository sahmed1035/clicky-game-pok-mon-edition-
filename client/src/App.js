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
    clickedFriends: [],
    topscore:0,
    score:0
  };

  friendClick = id => {
   //shuffle
   friends.sort(() => Math.random() - 0.5);
    // Set this.state.friends equal to the new friends array
    //globle enviornment that saves all the updates
    this.setState({ friends });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Navbar> </Navbar>
        <Title>Pokémon-Clicky-Game (Characters List)</Title>
        {this.state.friends.map(friend => (
          <FriendCard
          removeFriend={this.removeFriend}
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



