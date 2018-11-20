import React, { Component} from 'react';
import Minus from './minus';
import Plus from './plus';
import TYPES from './constant';

class Counter extends Component{
    constructor(props){
        
        super(props);
        this.state = {
            counter:0,
            inputValue: 1
        }
        console.log("Constructor")
        
    }

    componentDidMount(){
        console.log("Did Mount");
    }
    componentDidUpate(){
        console.log("Update");
    }

    render(){   
        console.log("Render")
        return <div>
        {this.state.counter}
        <br></br>
        <input type="number" onChange={this._handleInput} />
        <Minus onUpdate={this._handleCounter}/>
        <Plus onUpdate={this._handleCounter}/>
        </div>

      
    }


    _handleCounter = (type, value = 1 )=> e =>{  
        let inputValue = this.state.inputValue;                                              //переглянути
        let counter = this.state.counter + (type === TYPES.INC ? inputValue: -inputValue);
        counter < 0 ? this.setState({ counter:0 }) : this.setState({ counter });
    }

    _handleInput = e => {
        this.setState({
            inputValue: parseInt(e.target.value)
        })
    }


}

export default Counter;