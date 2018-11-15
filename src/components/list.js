import React, { Component } from 'react';
import Name from "./name"

class List extends Component{
    render() {      

    const viewItems = this.props.items
    .map((i,index) => <Name  item= {i} name={i.name} key={index}  />);
    console.log("List in render");

    return (<div className="list">
        Component list
            <div>
                Items:
                <ul>
                    {viewItems}
                </ul>
            </div>
        </div>);
    }
};

export default  List
