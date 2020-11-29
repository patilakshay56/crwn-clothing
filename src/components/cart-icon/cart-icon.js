import React from 'react';
import './cart-icon.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux';
import { toggleCheckout } from '../../redux/cart/cart.action';
import { selectedCartItemsCount } from '../../redux/cart/cart.selector';

const cartIcon = ({ toggleCartCheckout, totalCartItemCount }) => {
  return (
    <div className='cart-icon' onClick={toggleCartCheckout}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{totalCartItemCount}</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartCheckout: () => dispatch(toggleCheckout()),
});

const mapStateToProps = (state) => {
  return {
    totalCartItemCount: selectedCartItemsCount(state),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(cartIcon);
