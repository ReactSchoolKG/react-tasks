import React from 'react';
import Tick from './tick';
import TYPES from './constant';

class main extends React.Component {
    constructor(props){
        super(props);
        this.state = {
           tick: 0,
           items: [],
           color: TYPES.BLACK
        };
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.tick}</h1>
                {this.state.items.map((item, index)=>{
                   return <Tick key={index} element={item} deleteElem={this.deleteElem} color={this.state.color}/>;
                })}
                <div>
                    <select onChange={this.changeColor}  value={this.state.color}>
                        <option value={TYPES.BLACK}>Black</option>
                        <option value={TYPES.RED}>Red</option>
                        <option value={TYPES.GREEN}>Green</option>
                    </select>
                </div>
          </div>
        )
    }

    timer = () => {
        this.setState({tick: this.state.tick + 1})
    }

    componentDidMount() {
        this.intervalId = setInterval(this.timer, 1000);
    }  

    componentDidUpdate() {
        this.multiple();
    }

    multiple = () => {
            if(this.state.tick % 5 === 0) { 
                this.state.items.push(this.state.tick);
            }
        } 

    deleteElem = (event) => {
        const filteredItems = this.state.items.filter((item)=>{
            return item !== Number(event.target.innerText);
        });
        this.setState({
            items: filteredItems
        })
    }

    changeColor = (event) => {
        this.setState({color: event.target.value});
    } 
}
export default main;