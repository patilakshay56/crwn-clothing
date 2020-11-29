import React from 'react';
import './checkout-item.scss';
import { connect } from 'react-redux';
import {
  clearItemFromCart,
  addItem,
  removeItem,
} from '../../redux/cart/cart.action';

const checkoutItem = ({ cartItem, clearItemFromCart, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div onClick={() => removeItem(cartItem)} className='arrow'>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div onClick={() => addItem(cartItem)} className='arrow'>
          &#10095;
        </div>
      </span>
      <span className='price'>{price}</span>
      <span
        onClick={() => clearItemFromCart(cartItem)}
        className='remove-button'>
        &#10005;{' '}
      </span>
    </div>
  );
};

export default connect(null, { clearItemFromCart, addItem, removeItem })(
  checkoutItem
);
