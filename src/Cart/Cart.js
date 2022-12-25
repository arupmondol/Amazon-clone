import React from 'react';
import './Cart.css'

const Cart = (props) => {
  const {cart}=props
  console.log(cart)
  let total =0;
  let shiping = 0;
  for(const product of cart){
    total =total + product.price;
    shiping = shiping + product.shipping
  }
  const tax =( total * 0.10).toFixed(2)
  const newtax = parseFloat(tax)
  const grandTotal = total +shiping + newtax
  // console.log(newtax)
  return (
    <div>
    <div className='cart'>
       <h2>Order Cart</h2>
       <hr />
       <p>Selected Items: {cart.length}</p>
       <hr />
     <p>Total Price: ${total}</p>
     <hr />
     <p>Total Shiping: ${shiping}</p>
     <hr />
     <p>Tax: ${newtax}</p>
     
    </div>
    <h4 className='gtotal'>Grand Total: ${grandTotal}</h4>
    </div>
  );
};

export default Cart;