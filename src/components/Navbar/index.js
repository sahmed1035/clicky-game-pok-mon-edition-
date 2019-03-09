import React, { Component } from "react";
import "./style.css";

class  Navbar extends Component {
  render() {
    return (
  
      <div className="navbar">
          <ul>
           <li ><a href="/"> Pokémon Edition Clicky Game </a></li>
            <li >Do NOT click on the same image Twice!</li>
             <li> Score:{this.props.score} </li>
             <li> Top Score: {this.props.topscore}</li>
          </ul>
         </div>
      );
    }
  }
  

export default  Navbar;



