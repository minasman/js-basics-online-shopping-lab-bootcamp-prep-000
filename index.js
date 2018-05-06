var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 cart.push({itemName: item, itemPrice: Math.floor(1 + 100*Math.random())});
 return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  if (cart.length >0){
    var inCart = 'In your cart, you have ';
    for (var i=0; i<cart.length; i++){
      if(i===0 && cart.length === 1){
        return `In your cart, you have ${itemName} at $${itemPrice}.`
      } else if (i===0 && cart.length === 2){
        inCart += `${cart[i].itemName} at $${cart[i].itemPrice}, and ${cart[i+1].itemName} at $${cart[i+1].itemPrice}.`
        return inCart;
      } else 
    }
 
  } else {
    return 'Your shopping cart is empty.';
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
