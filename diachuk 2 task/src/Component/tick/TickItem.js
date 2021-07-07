import React, {Component} from 'react';

class TickItem extends Component{

    render(){
        return (
            <h1 onClick={this.props._removeItems()}>{this.props.item}</h1>
        )
    }
}


export default TickItem;
