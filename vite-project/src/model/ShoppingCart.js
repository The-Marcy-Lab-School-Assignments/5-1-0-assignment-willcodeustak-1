import getId from "../utils/getId";
import CartItem from "./CartItem";

class ShoppingCart {
 #cartItems= [];
 static #allCarts= [];
 static listAll() {
  // shallow copy of the #allCarts array
  return [...ShoppingCart.#allCarts];
}
 static findBy(id) {
  // Search for a ShoppingCart instance with the given id
  return ShoppingCart.#allCarts.find(cart => cart.id === id);
 }
 constructor() {
  this.id = getId();
  this.#cartItems;
    // Push each new instance to the static #allCarts array
    ShoppingCart.#allCarts.push(this);
}


createItem(name, price) {
  const newItem = new CartItem(name, price);

  this.#cartItems.push(newItem)
  return newItem;
}
getItems() { 
  return [...this.#cartItems]
}
removeItem(id) {
  for(let i = 0;i < this.#cartItems.length;i++){//array of objects
    const currItem = this.#cartItems[i]
    if(currItem.id === id){
      this.#cartItems.splice(i,1)
    }
  }
}
getTotal() {
 const sumOfArray = this.#cartItems.reduce(
  (accumulator,{price} ) => accumulator + price,0);
 return sumOfArray
}

}
 

export default ShoppingCart;