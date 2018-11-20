import React, { Component} from 'react';
import Name from "./name";

class List extends Component {
  render () {

    const viewItems = this.props.items.map((i, index) => <Name name={i.name} show={i.show} key={index} />);
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