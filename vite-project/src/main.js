import './style.css'
import { renderInventory, renderCart } from './utils/render-functions';
import ShoppingCart from './model/ShoppingCart';

const main = () => {
  const myCart = new ShoppingCart();

  document.querySelector("#inventory-list").addEventListener('click', (e) => {
    const { name, price } = e.target.closest('.item-card').dataset;
    myCart.createItem(name, Number(price));

    renderCart(myCart);
  });

  document.querySelector("#cart-list").addEventListener('click', (e) => {
    const { cartItemId } = e.target.closest('li').dataset;
    myCart.removeItem(Number(cartItemId))

    renderCart(myCart);
  });

  renderInventory();
}

main();