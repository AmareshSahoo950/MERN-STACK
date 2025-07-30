import "./Style/Header.css";
import shoesImg from './assets/Logo/lion.png';

function Header() {
  return (
    <>
        <nav>
          <div id="logo">
            <img src={shoesImg} alt="Logo" />
          </div>
          <ul>
            <li>Home</li>
            <li>Categories</li>
            <li>About Us</li>
          </ul>
        </nav>
    </>
  )
}

export default Header