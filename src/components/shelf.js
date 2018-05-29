import React, { Component } from 'react';

class Shelf extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      shelfItems: [
        'border',
        'background-color',
        'content'
      ]
    }
  }

  onAddItemToCart = (item) => {
    this.props.addItem(item);
  }



  render() {
    const shelfItems = this.state.shelfItems.map((item, idx) => {
      return <li key={idx}><button onClick={() => this.onAddItemToCart(item)}>[+]</button>{item}</li>
    });

    return (
      <div>
        <h2>Полка в магазине:</h2>
        <ul>
          {shelfItems}
        </ul>
      </div>
    );
  }
}

export default Shelf;