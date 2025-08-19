import CartItems from "./CartItems";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import "../Style/Cart.css";

function Cart() {

  const cart = useSelector(state => state.cartItems)
  const [isHomePage, setIsHomePage] = useState(true);

  const totalAmount = cart.reduce((sum, item) => {
    const price = Number(item.price.replace('$', ''));
    return sum + price * item.quantity;
  }, 0);

  const pageStateChange = () => {
    setIsHomePage(!isHomePage)
  }

  return (
    <div className="cart-container">
      <div id="cart">
        <h2>Cart</h2>
        <CartItems />
        <div className="total">
          <p>
            {`Total : $${Math.round(totalAmount)}.00`}
          </p>

          {(isHomePage) ? (
            <Link to={'payment'} onClick={pageStateChange} className="cart-button">
              Proceed To Payment
            </Link>
          ) : (
            <Link to={'/'} onClick={pageStateChange} className="cart-button">
              Go back to Shopping
            </Link>
          )}

        </div>
      </div>
    </div >
  )
}

export default Cart