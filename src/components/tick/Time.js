import React, { Component } from "react";
import OutTime from "./OutTime";

class Time extends Component {
  constructor() {
    super();
    this.state = {
      tick: 0,
      items: []
    };
  }


  render() {
    setTimeout(() => {
      if ((this.state.tick + 1) % 5 === 0 && this.state.tick !== 0) {
        this.setState({
          items: [...this.state.items, this.state.tick + 1],
          tick: this.state.tick + 1
        });
      } else {
        this.setState({ tick: this.state.tick + 1 });
      }
    }, 1000);



    let arr = this.state.items.map(function(i, j) {
      return <OutTime item={i} key={j} />
    });

    return (
      <div>
        <h1>{this.state.tick}</h1>
        {arr}
      </div>
    );
  }
}

export default Time;
