const addToDb = id =>{
   let shopingCart = {};

//get the shoping cart from local stroage
   const storedCart = localStorage.getItem('shoping-cart');
   if(storedCart){
    shopingCart = JSON.parse(storedCart);
   }

// add quantity
const quantity = shopingCart[id];
if(quantity){
  const newQuantity =  quantity + 1;
  shopingCart[id] = newQuantity;
}
else{
  shopingCart[id] = 1;
}
localStorage.setItem('shoping-cart',JSON.stringify(shopingCart));


}

const getStoredCart = () =>{
  let shopingCart = {};
  // get the shoping cart from local stroage
   const storedCart = localStorage.getItem('shoping-cart');
   if(storedCart){
    shopingCart = JSON.parse(storedCart);
   }
   return shopingCart
}

export {addToDb,getStoredCart}