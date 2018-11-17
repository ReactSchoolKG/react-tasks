import React, {Component} from 'react';
import ListItem from './listitem';

class Tick extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tick: 0,
            items: []
        };
    }

    render() {
        return (<div>
                    <h1>{this.state.tick}</h1>
                    <ul>
                        <ListItem items={this.state.items} func={this._deletItem}/>
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
        console.log('Yes');
        let arr = this.state.items;
        let newArr = arr.filter((item) => {
            return (e.target.value !== item);
        });
        let parentUl = e.target.parentNode;
        let liEl = e.target;
        parentUl.removeChild(liEl);
        this.setState({
            items: newArr
        });
    }

}

export default Tick;