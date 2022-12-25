import React from 'react';
import './Product.css'

const Product = (props) => {
  //  console.log(props)
  const { name, img, price, ratings, seller} = props.product
  const {addToCart,product} = props
  
  
  return (
    <div className='product'>
    <img src={img} alt="" />
   <div className="product-info">
     <p className='product-name'>{name}</p>
     <p>Price: ${price}</p>
     <p><small>Seller: {seller}</small></p>
     <p><small>Ratings: {ratings}</small></p>
   </div>
   <button onClick={ ()=> addToCart(product)} className='button-cart'><p>Add to Cart</p></button>
    </div>
  );
};

export default Product;