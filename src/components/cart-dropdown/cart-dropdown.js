import React from 'react';
import CustomButton from '../custom-button/custom-button';
import './cart-dropdown.scss';
import CartItem from '../cart-item/cart-item';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selector';
import { createStructuredSelector } from 'reselect';

const cartDropdown = ({ cartItems }) => {
  console.log('cart component dropdown re-rendered !!!!');
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton>Go To Checkout</CustomButton>
    </div>
  );
};

const mapDispatchToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapDispatchToProps, null)(cartDropdown);
