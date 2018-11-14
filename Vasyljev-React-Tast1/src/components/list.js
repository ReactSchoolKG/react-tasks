import React, { Component} from 'react';
import Name from "./name";

class List extends Component {
  constructor(props) {
    super(props);
    this.items = props.items;
  }
  render () {    
    
    const viewItems = this.items
        .map((i, index) => <Name item={i} key={index} />);
    console.log('List in render');
    return (<div className="list">
      Component List
      { this.props.children }
      <div>
        Items:
        <ul>
          {viewItems}
        </ul>
      </div>
    </div>);
  }
}

export default List;
