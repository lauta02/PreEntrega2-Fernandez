import React from 'react';
import './CartWidget.css';

const CartWidget = () => {
  return (
    <div className='container-icon cart-icon-white'>
      <div className='container-cart-icon'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='2'
          stroke='#000'
          className='icon-cart'
        >
          <circle cx='9' cy='21' r='1'></circle>
          <circle cx='20' cy='21' r='1'></circle>
          <path d='M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6'></path>
        </svg>
        <div className='count-products'>
          <span id='contador-productos'>5</span> 
        </div>
      </div>
    </div>
  );
};

export default CartWidget;