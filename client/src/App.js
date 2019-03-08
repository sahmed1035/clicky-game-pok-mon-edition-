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
    friendClick:[],
    topscore:0,
    score:0
  };

  shuffleCards = id => {
let friendClick = friends.filter(friend => friend.id === id);

// already clicked
if (friendClick[0].clicked) {
  score = 0;

  // the value of all the cards is reinitialized to false
  for (let i=0; i<friends.length; i++) {
    friends[i].clicked = false;
  }
  this.setState({ friends, score: this.state.score});
}

else {
  friendClick[0].clicked = true;
  score ++;
  
  friends.sort(() => Math.random() -0.5);
  this.setState({ friends, score: this.state.score +1});

  //topscore
  if (score > topscore) {
    topscore = score;
    this.setState({topscore});
  }
}

  };

  // friendClick = id => {
  //  //shuffle
  //  friends.sort(() => Math.random() - 0.5);
  //   // Set this.state.friends equal to the new friends array
  //   //globle enviornment that saves all the updates
  //   this.setState({ friends });
  // };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Navbar> </Navbar>
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



