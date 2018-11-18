import React, { Component} from 'react';

class Item extends Component{

    render(){
        return (
           <h3 onClick={this.props.deleteMethod}>{this.props.item}</h3>
        )
    }
    
}


export default Item;