
import { useDispatch } from "react-redux";
import { addToCart } from "../ReduxApp/appSlice";
import "../Style/Products.css";
import shoes from "../products.json";

function Products() {
  const dispatch = useDispatch();

  function addItemsToCart(item) {
    dispatch(addToCart(item));
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
            <button id="add-to-cart" onClick={() => addItemsToCart(shoe)}>
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Products;