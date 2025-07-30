import "./Style/CartItems.css"

function CartItems({ cart, setCart }) {

  function modify(item, symbol) {
    let updatedCart = cart.map(cartItem => {
      if (cartItem.id === item.id) {
        if (symbol === "+") {
          return { ...cartItem, quantity: cartItem.quantity + 1 };
        }

        if (symbol === "-") {
          return { ...cartItem, quantity: cartItem.quantity - 1 };
        }
      }
      return cartItem;
    });

    updatedCart = updatedCart.filter(cartItem => cartItem.quantity > 0);

    setCart(updatedCart);
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
            <button className="cart-button" onClick={() => modify(item, "-")}><span>-</span></button>
            <p>{item.quantity}</p>
            <button className="cart-button" onClick={() => modify(item, "+")}>+</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CartItems;