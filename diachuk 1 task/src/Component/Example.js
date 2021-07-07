import React, { Component } from 'react';
import List from "./List";

class Example extends Component {

    constructor(props){
        super(props);
        this.state = {
            counter : 0
        };
    }
    _handleClickAdd =()=> {
    this.setState({
                      counter: this.state.counter + 1
});
    }

_handleClickDelete=()=>
{
    if (this.state.counter > 0) {
        this.setState({
            counter: this.state.counter - 1
        });
    }
}



    render(){
        console.log("example in render");
        return <div className="example">
            Component Example
        <div>
        <List>
        <h2>
        Info from Example
        </h2>
        <h3>
        Test
        </h3>
        </List>
        <div>
        {this.state.counter}
    <button onClick={this._handleClickAdd} >+1</button>
    <button onClick={this._handleClickDelete} >-1</button>
        </div>
    </div>
    </div>
    }


}

export default Example;