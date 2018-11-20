import React, { Component } from "react";
import Value from "./tick_helper";
import COLORS from "./colors_const";

class Tick extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tick: 0,
      items: [],
      color: null
    };
  }

  _count = () => {
    setInterval(() => {
      let items = [];
      const tick = this.state.tick + 1;
      if (tick % 5 === 0) items.push(tick);
      items = [...this.state.items, ...items];
      this.setState({
        tick,
        items
      });
    }, 1000);
  };

  _deleteItem = e => {
    const { target } = e;
    let { items } = this.state;
    let newValues = items.filter(item => item !== +target.textContent);
    this.setState({
      items: newValues
    });
    console.log(items);
  };

  _changeColor = e => {
    const { target } = e;
    const color = COLORS[target.value.toUpperCase()];
    this.setState({ color });
  };

  componentDidMount() {
    this._count();
  }

  render() {
    return (
      <div>
        <div>
          <select
            onChange={this._changeColor}
            style={{ position: "fixed", left: "40%" }}
          >
            <option value="black">Black</option>
            <option value="red">Red</option>
            <option value="green">Green</option>
          </select>
        </div>
        <h1>{this.state.tick}</h1>
        {this.state.items.map((i, index) => (
          <Value
            item={i}
            key={index}
            deleteMe={this._deleteItem}
            color={this.state.color}
          />
        ))}
      </div>
    );
  }
}

export default Tick;
