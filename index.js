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
  if (cart.length ===1 ){
    return `In your cart, you have ${cart[0].itemName]} at $${cart[0].itemPrice}.`
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
