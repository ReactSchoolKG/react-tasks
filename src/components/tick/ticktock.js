import React, { Component} from 'react';
import './style.css';
import Item from './item';

class TickTock extends Component{
    constructor (props){
        super(props);
        this.state = {
            tick: 0,
            items:[],
            selectedColor:null
        };
    }
    render(){
        const viewItems = this.state.items
            .map((i, index) => <Item item={i} key={index} deleteMethod={this._deleteHandler}/>);
        return (
            <div className="ticktock">
                <h1>{this.state.tick}</h1>
                <select onChange={this._handleChange}>
                    <option value="blackColor">Black</option>
                    <option value="redColor">Red</option>
                    <option value="greenColor">Green</option>
                </select>
                <div className={this.state.selectedColor}>
                    {viewItems}
                </div>
            </div>
        )
    }

    _handleChange = (event) => {
        this.setState({ 
            selectedColor: event.target.value
        });
    }

    _incrementTick = ()=>{
        this.setState({
            tick: this.state.tick + 1 
        })
    }
    _deleteHandler = (e) => {
        let newitems = this.state.items.filter((elem)=>{
            return elem !== parseInt(e.target.innerText);
        });
        this.setState({
            items: newitems
        })
    }

    componentDidUpdate(){
        if(this.state.tick % 5 === 0){
            this.state.items.push(this.state.tick);
            console.log(this.state.items)
        }
    }

    componentDidMount(){
        setInterval(this._incrementTick,1000)
    }
}

export default TickTock;