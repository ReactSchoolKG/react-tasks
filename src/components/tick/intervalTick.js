import React, { Component } from 'react';
import Items from './item';
import COLORS from './COLORS'

class IntervalTick extends Component {
    constructor() {
        super()
        this.state = {
            tick: 0,
            items: [],
            color: COLORS.BLACK
        }
    }
    render() {
        return (
            <div>
                <h1>{this.state.tick}</h1>
                <select value={this.state.color} onChange={this._colorSelected}>
                    <option value={COLORS.BLACK}>Black</option>
                    <option value={COLORS.RED}>Red</option>
                    <option value={COLORS.BLUE}>Blue</option>
                </select>
                <Items onUpdate={this.state.items} itemDelete={this._itemDeleter} colorSL={this.state.color}/>
            </div>
        );
    }
    _tickCounter = e => {
        this.setState({
            tick: this.state.tick + 1
        })
        if (this.state.tick % 5 === 0) {
            this.setState({
                items: [...this.state.items, this.state.tick]
            })
        }
    }
    _colorSelected = e =>{
        this.setState({
            color: e.target.value
        })
    }
    _itemDeleter = e => {
        let filteredItems = this.state.items.filter(item => item !== Number(e.target.innerText))
        this.setState({ items: filteredItems });
    }
    componentDidMount() {
        this.timerID = setInterval(this._tickCounter, 1000);
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
}

export default IntervalTick;