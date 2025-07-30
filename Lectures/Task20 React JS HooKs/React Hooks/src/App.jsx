import React, {useState} from "react";
import Header from "./Header";
import Product from "./Products";
import Cart from "./Cart";
import "./Style/App.css";

function App() {
 const [cart, setCart] = useState([]);
  return (
    <>
      <Header />
      <main>
        <Product cart={cart} setCart= {setCart}/>
        <Cart cart={cart} setCart= {setCart}/>
      </main>
    </>
  )
}

export default App;