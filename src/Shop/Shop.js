import React, { useState } from 'react';
import { useEffect } from 'react';
import './Shop.css'
import Product from '../Product/Product'
import Cart from '../Cart/Cart';
import { addToDb, getStoredCart } from '../fakeDB/fakeDB';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([])

  useEffect(() => {
    fetch('products.json')
    .then(res => res.json())
    .then(data => setProducts(data))
  },[])

  useEffect(() =>{
    // console.log('stored cart')
    const storedCart =getStoredCart();
    // console.log(storedCart);
    const savedCart = [];
   for(const id in storedCart){
   const addedProduct = products.find(product => product.id === id);
   if(addedProduct){
     const quantity =storedCart[id]
     addedProduct.quantity =quantity;
      // console.log(addedProduct)
    savedCart.push(addedProduct);
   }
 
   }
   setCart(savedCart);
  },[products])

  const addToCart =(product) =>{
    const newCart =[...cart,product]
    setCart(newCart)
    addToDb(product.id)
  }

  return (
    <div className='shop-container'>
      <div className="product-container">
       {
        products.map(product => <Product product={product}
        key={product.id}
        addToCart ={addToCart}
        ></Product>)
       }
      </div>


      <div className="cart-container">
      <Cart cart={cart}>

      </Cart>
       
      </div>
    </div>
  );
};

export default Shop;