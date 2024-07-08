import { items } from './items.json'

export const renderInventory = () => {
  const inventoryEl = document.querySelector('#inventory-list');
  items.forEach((item) => {
    const itemCard = document.createElement('div');
    itemCard.className = 'item-card';
    itemCard.dataset.name = item.item_name;
    itemCard.dataset.price = item.price;
    itemCard.innerHTML = `
      <img alt=${item.item_name} src=${item.img_url}>
      <p>${item.item_name}: $${item.price}</p>
      <button>Add To Cart</button>
    `
    inventoryEl.append(itemCard);
  });
}

export const renderCart = (myCart) => {
  const cartTotal = myCart.getTotal();
  const cartItems = myCart.getItems();

  // update the cart total
  document.querySelector("#cart-total").textContent = `Total: $${cartTotal}`;

  // empty and cart
  const cartList = document.querySelector("#cart-list");
  cartList.innerHTML = '';

  // and re-render the cart
  cartItems.forEach((item) => {
    const li = document.createElement('li');
    li.innerHTML = `${item.name} $${item.price}`;
    li.dataset.cartItemId = item.id;
    cartList.append(li);
  });
}