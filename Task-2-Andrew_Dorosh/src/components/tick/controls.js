import React, { Component } from 'react';
import Screen from './screen';


class Controls extends Component {
    constructor(){
        super();


        this.state = {
            tick: 0,
            items: [],
            color: ''
        }

        // this.deleteItem = this.deleteItem.bind(this);
    }

    incrementTick(){
        this.setState({
            tick: this.state.tick + 1
        },()=>{
            if(this.state.tick % 5 === 0 ){
                let newItem = this.state.tick;
                this.setState({items: [...this.state.items, newItem]})
            }
        });
    }

    deleteItem = (id) => e =>{
        const newItems = this.state.items.filter((elem)=>elem !== id);
        
        this.setState({
            items: newItems
        })
    }

    changeColor = (evt) => {
        this.setState({
            color: evt.target.value
        })
    }

    

    componentWillMount(){
        this.timerId = setInterval(()=> {
            this.incrementTick();
        },1000);
    }

    componentWillUnmount(){
        clearInterval(this.timerId);
        console.log('unmount');
    }


    render(){
        const allItems = this.state.items.map( (elem, index) =>{
            return <Screen key={index} color={this.state.color} handler={this.deleteItem} item={elem} />
        });
        return(
            <div>
                <h1>{ this.state.tick }</h1>
                <select value={this.state.color} onChange={this.changeColor}>
                    <option value="black">Black</option>
                    <option value="green">Green</option>
                    <option value="red">Red</option>
                </select>
                <ul>{ allItems }</ul>
            </div>
        )
    }

}

export default Controls;