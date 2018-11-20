import React from "react";

import TickHelper from "./tickHelper";


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
 
             <select  name="colorSelect"  onChange={this._changeColor}>
                        <option value="black">Black</option>
                        <option value="red">Red</option>
                        <option value="green">Green</option>
                    </select>
              
            <TickHelper _deleteItem={this._deleteItem} divItems={this.state.items} color={this.state.color}/>
        </div>
        );
    }

    componentDidMount() {
        console.log("Parent did Mount");
        setInterval(() => this._changeTick(), 1000);
    }

    componentDidUpdate(){
        let addItems = this.state.items;
        if ((this.state.tick % 5 === 0) && !addItems.includes(this.state.tick)){
            addItems.push(this.state.tick);
            this.setState({items:addItems})
        }
    }

    _changeTick(){
        this.setState({
            tick: this.state.tick + 1
        });
    }

    _changeColor = e =>{
        this.setState({
            color:e.target.value
        })
    }

    _deleteItem = (e) => {
        let newItem = this.state.items.filter((item)=>{
            return item !== parseInt(e.target.innerText);
        });
        this.setState({
            items: newItem
        })
    }


    
    
}


export default Tick;