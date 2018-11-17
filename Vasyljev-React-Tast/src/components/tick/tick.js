import React, {Component} from 'react';
import ListItem from './listitem';

class Tick extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tick: 0,
            items: [],
            color: 'black'
        };
    }

    render() {
        return (<div>
                    <h1>{this.state.tick}</h1>
                    <h2>Color</h2>
                    <select onChange={this._changeColor}>
                        <option value="black">Black</option>
                        <option value="red">Red</option>
                        <option value="green">Green</option>
                    </select>
                    <ul>
                        <ListItem items={this.state.items} func={this._deletItem} color={this.state.color}/>
                    </ul>
                    
                    
                   
                </div>);
    };

    componentDidMount() {
       const incTick = setInterval(() => {
            let newValue = this.state.tick + 1;            
            this.setState({
                tick: newValue
            });
            this.addToItems(newValue);
        }, 1000);
    
    }

    
    addToItems = (value) => {
        let arr = this.state.items;        
        if(!(value % 5)) {
            arr.push(value)        
            this.setState({
                items: arr
            });
            console.log(arr);            
        }
    };

    _deletItem = (e) => {
        let arr = this.state.items;
        let newArr = arr.filter((item) => {
            return (e.target.value !== item);
        });
        this.setState({
            items: newArr
        });
    }

    _changeColor = (e) => {
        let colorText = e.target.value;
        this.setState({
            color: colorText
        })
    }

}

export default Tick;