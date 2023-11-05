import "./Header.scss";
import Logo from "../../assets/Logo/InStock-Logo.svg";
import { NavLink } from "react-router-dom";


function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={Logo} alt="logo" className="header__logo" />
      </div>
      <div className="header__buttons-container">
        <NavLink to="/" className={({ isActive }) => "header__buttons" + isActive ? "header__button-active" : ""} >
          {/* <button type="submit" className="header__warehouse-button"> */}
            <p className="header__button-font">Warehouses</p>
          {/* </button> */}
        </NavLink>
        <NavLink to="/inventory" className="header__buttons">
          {/* <button type="submit" className="header__inventory-button"> */}
            <p className="header__button-font">Inventory</p>
          {/* </button> */}
        </NavLink>
      </div>
    </header>
  );
}

export default Header;