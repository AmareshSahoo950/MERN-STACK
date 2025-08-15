import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Header, Cart } from './Index'
import { CartProvider } from "./Context/context";
import "./Style/Layout.css";

function Layout() {

  const location = useLocation();

  const [cart, setCart] = useState(() =>
    JSON.parse(localStorage.getItem('cart')) || []);
  const [isHomePage, setIsHomePage] = useState(() =>
    JSON.parse(localStorage.getItem('homeState')) || true);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));

    const currentPageState = location.pathname === '/';
    setIsHomePage(currentPageState);

    localStorage.setItem("homeState", JSON.stringify(isHomePage));
  }, [cart, isHomePage])

  return (
    <>
      <Header />
      <CartProvider value={{
        cartState: [cart, setCart],
        homePageState: { isHomePage, setIsHomePage }
      }}>

        <main>
          <div className="first-section">
            <Outlet />
          </div>
          <div className="second-section">
            <Cart />
          </div>
        </main>
      </CartProvider>
    </>
  )
}

export default Layout;