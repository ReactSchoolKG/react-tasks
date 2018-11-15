import React, { Component } from 'react';
import List from "./list"

class Example extends Component{
    constructor(props){
        super(props);
        this.state = {
            counter:0
        };
        this._hendleClickP = this._hendleClickP.bind(this);
    }
    render() {
        const items =[{
            name: "Stas",
            show:true},
        {
            name: "Dan",
            show:false},
        {
            name: "Ross",
            show:true
        },
        {
            show:true}
    ];
        console.log("Example in render");
        return (<div className="Example">
        Component Example
        <div className="list">
            List
            <List items = {items}>
                <h2>Information from Example</h2>
                <h3>Test</h3>
                List
            </List>
        </div>
        <h1>Counter</h1>
        <div>  
            <button onClick={()=>this._hendleClickM()}>-</button>
            {this.state.counter}
            <button onClick={this._hendleClickP}>+</button>
        </div>
        </div>);
    }
    _hendleClickP(e){
        this.setState({
            counter: this.state.counter + 1
        });
    };
    _hendleClickM(e){
        if(this.state.counter){
            this.setState({
                counter: this.state.counter - 1 
            });
        }   
    }
};

export default  Example
