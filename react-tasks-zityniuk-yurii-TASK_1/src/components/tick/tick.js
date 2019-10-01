import React from "react";
import TickList from "./tickList";


class Tick extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            tick:0,
            items:[],
            color:"black",
        }
    }

    render(){
        return (
        <div>
            <h1>{this.state.tick}</h1>
            <select defaultValue="black" name="color_select"  onChange={this._changeColor}>
                <option  value="black">black</option>
                <option  value="red">red</option>
                <option  value="green">green</option>
            </select>
            <TickList handlClick={this._handleClick} div5={this.state.items} color={this.state.color}/>
        </div>
        );
    }

    componentDidMount() {
        console.log("Component clockParent did Mount");
        setInterval(() => this._tick(), 1000);
      }

      componentDidUpdate(){
        // console.log("Component clockParent did update");
        let newItems = this.state.items;
        if ((this.state.tick % 5 === 0) && !newItems.includes(this.state.tick)){
            newItems.push(this.state.tick);
            this.setState({items:newItems})
        }
    }

    _tick(){
        this.setState({
            tick: this.state.tick + 1
        });
    }

    _handleClick  = e =>{
        console.log(`clicked on ${e.target.textContent}`)
        let prevItems = this.state.items;
        let currentItems = prevItems.filter(function(item){
            return item !== +e.target.textContent;
        });
        this.setState({
            items: currentItems
        })
    }
    
    _changeColor = e =>{
        console.log(`changed color to ${e.target.value}`);
        this.setState({
            color:e.target.value
        })
    }
}


export default Tick;
