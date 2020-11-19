import React from 'react';
import './preview-collection.scss';
import CollectionItem from '../../components/collection-item/collection-item';

const previewCollection = ({ title, items }) => {
  return (
    <div className='collection-preview'>
      <h1 className='title'>{title}</h1>
      <div className='preview'>
        {items
          .filter((el, index) => index < 4)
          .map(({ id, ...otherProps }) => (
            <CollectionItem key={id} {...otherProps}></CollectionItem>
          ))}
      </div>
    </div>
  );
};

export default previewCollection;
