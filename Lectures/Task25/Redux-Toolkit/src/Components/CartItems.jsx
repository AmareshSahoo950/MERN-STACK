import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../ReduxApp/appSlice";
import "../Style/CartItems.css"

function CartItems() {

  const dispatch = useDispatch();

  const cart = useSelector(state => state.cartItems)

  function modify(item, symbol) {
    if (symbol === '+') {
      dispatch(addToCart(item))
    }
    if (symbol === '-') {
      dispatch(removeFromCart(item))
    }
  }

  return (
    <div className="cart-items">
      {cart.map((item) => (
        <div className="item" key={item.id}>
          <img id="cart-image" src={item.imgSrc} alt="itemlogo" />
          <div className="desc">
            <p className="item-name">{item.title}</p>
            <p className="price">{item.price}</p>
          </div>
          <div className="item-modify">
            <button className="item-button" onClick={() => modify(item, "-")}><span>-</span></button>
            <p>{item.quantity}</p>
            <button className="item-button" onClick={() => modify(item, "+")}><span id="plus">+</span></button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CartItems;