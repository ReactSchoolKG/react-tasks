import React, {Component} from 'react';
import TickItem from './TickItem';

import "./main.css";

class NumberTicks extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tick: 0,
            items: [],
            Colors: null
        };
    }
render(){
    const  viewItems = this.state.items
        .map((i, index) => <TickItem item={i} _removeItems={this._deleteItems}  key={index}/>);
        return(
            <div>
                <h1 id="Main">
                    {this.state.tick}
                </h1>
                <select onChange={this.handleColorChange} >
                    <option value="blackColor">Black</option>
                    <option value="redColor">Red</option>
                    <option value="greenColor">Green</option>
                </select>
                <ul id="column">
                    <div className={this.state.Colors}>
                        {viewItems}
                    </div>
                </ul>
            </div>
              );

}


    handleColorChange = (event) => {
        this.setState({
            Colors: event.target.value
        });
    }


 _setTick=()=>{
this.setState({
    tick:this.state.tick+1
});
if(this.state.tick%5===0){
    this.state.items.push(this.state.tick);
    this.setState({
        items:this.state.items
    });
}
}
    componentDidMount() {
         setInterval(() => this._setTick(), 1000);
    }


    _deleteItems=()=>(e)=>{
    e.preventDefault();
        e.target.parentNode.removeChild(e.target);
    };
}

export default NumberTicks;
