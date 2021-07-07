import React, { Component } from 'react';
import Name from "./Name";

class List extends Component {
    render(){

        const items = [
            {
                name : 'Stas',
                show : true
            },
            {
                name : 'Andrian',
                show : true
            },
            {
                name : "Olga",
                show : false
            },
            {
                name : "Nazar",
                show : true
            },
            {
                show:true
            },
            {
                show:true
            }
        ];

        const viewItems = items.map((item, index) => <Name key={index} name={item.name} show={item.show}/>);

        console.log("List in render");
        return <div className="list">
            Component List
        { this.props.children }
    <div>
        Items:
    <ul>
        {viewItems}
        </ul>
        </div>
        </div>;
    }
}
//function({item:{name:'dd',show:true})

export default List;