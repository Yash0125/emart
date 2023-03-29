import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import "./Header.css";
import { useStateValue } from "../utils/StateProvider";

const Header = () => {
  const [{ cart }] = useStateValue();

  return (
    <nav className="header">
      <Link to="/">
        <h1 className="header__title">EMART</h1>
      </Link>

      <div className="header__search">
        <input type="text" className="header__searchInput" placeholder="" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& order</span>
          </div>
        </Link>

        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>

        <Link to="/checkout" className="header__link">
          <div className="header__optionCart">
            <ShoppingCartIcon />
            <span className="header__optionLineTwo header__CartCount">
              {cart?.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
