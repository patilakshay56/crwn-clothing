import React, { Component } from 'react';
import { ShopData } from './shop.data';
import PreviewCollection from '../../components/preview-collection/preview-collection';

class shop extends Component {
  state = {
    collections: ShopData,
  };
  render() {
    return (
      <div>
        {this.state.collections.map(({ id, ...otherCollectionProps }) => {
          return <PreviewCollection key={id} {...otherCollectionProps} />;
        })}
      </div>
    );
  }
}

export default shop;
