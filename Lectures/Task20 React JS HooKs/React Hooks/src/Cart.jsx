import CartItems from "./CartItems";
import "./Style/Cart.css";

function Cart({ cart, setCart }) {

  const totalAmount = cart.reduce((sum, item) => {
    const price = Number(item.price.replace('$', ''));
    return sum + price * item.quantity;
  }, 0);

  return (
    <div className="cart-container">
      <div id="cart">
        <h2>Cart</h2>
        <CartItems cart={cart} setCart={setCart} />
        <div id="total">Total : ${Math.round(totalAmount)} </div>
      </div>
    </div>
  )
}

export default Cart