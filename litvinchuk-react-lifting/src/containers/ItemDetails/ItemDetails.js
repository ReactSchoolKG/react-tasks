import React, { Component } from 'react';

import ItemsService from "../../services/ItemsService";
import ItemDetails from "../../components/ItemDetails/ItemDetails";

class ItemDetailsContainer extends Component {
  constructor () {
    super();
    this.state = {
      id: null,
      item: null
    }
  }

  render () {
    const { id, item } = this.state;
    return <div className="item-details-container">
      <ItemDetails id={id} item={item}/>
    </div>
  }

  componentDidMount () {
    const id = this.props.match.params.id;
    ItemsService.getOne(id)
        .then(res => {
          this.setState({
            id,
            item: res.data
          })
        })
  }
}

export default ItemDetailsContainer;
