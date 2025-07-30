import "./Style/Products.css"
import shoes from "./products.json"


function Products({cart, setCart}) {

  function addToCart(item) {
    const found = cart.find((cartItem) => cartItem.id === item.id);
    if (found) {
      setCart(cart.map(cartItem =>
        cartItem.id === item.id ?
          { ...cartItem, quantity: (cartItem.quantity || 1) + 1 } : cartItem
      ));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  }

  return (
    <div className="container">
      {shoes.map(shoe => (
        <div className="product" key={shoe.id}>
          <div className="product-image">
            <img src={shoe.imgSrc} alt="product image" />
          </div>
          <div className="description">
            <div id="title">{shoe.title}</div>
            <div id="price">{shoe.price}</div>
            <button id="add-to-cart" onClick={() => addToCart(shoe)}>
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Products;