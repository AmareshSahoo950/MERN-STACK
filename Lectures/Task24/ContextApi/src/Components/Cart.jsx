import CartItems from "./CartItems";
import { Link } from "react-router-dom";
import { useCart } from '../Context/context'
import "../Style/Cart.css";

function Cart() {

  const { cartState, homePageState } = useCart();

  const [cart, setCart] = cartState;
  const { isHomePage, setIsHomePage } = homePageState


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
        <CartItems cart={cart} setCart={setCart} />
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