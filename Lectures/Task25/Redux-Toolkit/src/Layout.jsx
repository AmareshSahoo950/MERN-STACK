import { Outlet} from "react-router-dom";
import { Header, Cart } from './Index'
import { Provider } from "react-redux";
import { store } from "./ReduxApp/store";
import "./Style/Layout.css";


function Layout() {

  return (
    <>
      <Header />
      <Provider store={store}>
        <main>
          <div className="first-section">
            <Outlet />
          </div>
          <div className="second-section">
            <Cart />
          </div>
        </main>
      </Provider>
    </>
  )
}

export default Layout;