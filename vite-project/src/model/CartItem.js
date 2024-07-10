import getId from "../utils/getId";

class CartItem {
  constructor(name, price) {
    this.id = getId();    // Generate a unique ID
    this.name = name;     // Set the name of the item
    this.price = price;   // Set the price of the item
  }
}

export default CartItem;