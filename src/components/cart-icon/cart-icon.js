import React from 'react';
import './cart-icon.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux';
import { toggleCheckout } from '../../redux/cart/cart.action';

const cartIcon = ({ toggleCartCheckout }) => {
  return (
    <div className='cart-icon' onClick={toggleCartCheckout}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>0</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartCheckout: () => dispatch(toggleCheckout()),
});

export default connect(null, mapDispatchToProps)(cartIcon);
