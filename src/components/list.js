import React, { Component} from 'react';
import Name from "./name";

class List extends Component {
  render () {
    const items = [
      {
        name: 'Stas',
        show: true
      },
      {
        name: 'Andrian',
        show: true
      },
      {
        name: 'Olga',
        show: false
      },
      {
        name: 'Nazar',
        show: true
      }
    ];

    const viewItems = items
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
