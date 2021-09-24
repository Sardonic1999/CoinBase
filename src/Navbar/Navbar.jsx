import React from "react";
import { Wrapper, Logo, Pages, Login } from "./Navbar_Style";
import logo from "../assets/icons/Logo.svg";

const Navbar = () => {
  return (
    <Wrapper>
      <Logo src={logo} alt="logo" />
      <Pages>
        <li>Home</li>
        <li>About us</li>
        <li>Blog</li>
        <li>Contact us</li>
      </Pages>
      <Login>
        <select>
          <option>Sell Bitcoin</option>
          <option>Giftcard</option>
        </select>
        <button>LOGIN</button>
      </Login>
    </Wrapper>
  );
};

export default Navbar;
