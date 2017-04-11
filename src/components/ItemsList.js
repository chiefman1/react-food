/**
 * Created by Chiefman on 08/04/2017.
 */
import React from 'react';
import Item from '../components/Item.js';

class ItemsList extends React.Component {
  render() {
    var items = this.props.products.map(function(item) {
        return (
            <li key={item.id}>
                <Item image={item.images[365].src} title={item.title} description={item.description}/>
            </li>
        );
    });

    return (
        <div className="ItemsList">
            <ul>
                {items}
            </ul>
        </div>
    );
  }
}

export default ItemsList;