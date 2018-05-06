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
  var inCart = "In your cart, you have ";
  if (cart.length ===1 ){
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
  }
  
  if (cart.length ===2 ){
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`;
  }
  
  if (cart.length > 2){
    var entries = 0;
    do {
      inCart += `${cart[entries].itemName} at $${cart[entries].itemPrice}, `;
      entries++;
    } while (entries < cart.length - 2);
  }
  return inCart+=`${cart[cart.length - 2].itemName} at $${cart[cart.length - 2].itemPrice}, and ${cart[cart.length - 1].itemName} at $${cart[cart.length -1].itemPrice}.`;
  
}

function total() {
  // write your code here
  var cartTotal = 0;
  for (var i=0; i<cart.length; i++){
    cartTotal += parseInt(cart[i].itemPrice);
  }
  return `Your current total is $${cartTotal}.`
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
