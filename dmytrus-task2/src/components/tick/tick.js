import React from 'react';

class Tick extends React.Component  {
    render() {
        return <div onClick={this.props.deleteElem} style={{color:this.props.color}}>{this.props.element}</div>
    }
}

export default Tick;