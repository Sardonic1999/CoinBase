import React from "react";
import {
  Wrapper,
  Coin,
  ItemWrap,
  Items,
  Apps,
  Last,
  Rec,
  WrapRec,
} from "./Footer_Style";
import logo from "../assets/icons/Logo.svg";
import Facebook from "../assets/icons/Facebook.svg";
import Google from "../assets/icons/Google+.svg";
import Instagram from "../assets/icons/Instagram.svg";
import Twitter from "../assets/icons/Twitter.svg";
import Shape from "../assets/icons/Shape.svg";

const Footer = () => {
  return (
    <Wrapper>
      <Coin>
        <img src={logo} alt="" />
        <p>
          {" "}
          Fusce ut elit aliquet, fermentum leo vel, tempus <br /> nunc. Fusce eu
          rhoncus augue. Fusce vel metus <br /> pharetra, fermentum
        </p>
        <Apps>
          <img src={Google} alt="" />
          <img src={Facebook} alt="" />
          <img src={Twitter} alt="" />
          <img src={Instagram} alt="" />
        </Apps>
      </Coin>
      <ItemWrap>
        <Items>
          <h1>CoinBase Links</h1>
          <li>Home</li>
          <li>About us</li>
          <li>Blog</li>
          <li>Sell</li>
          <li>Contact us</li>
        </Items>
        <Items>
          <h1>Contact us</h1>
          <li>Home</li>
          <li>About us</li>
          <li>Blog</li>
          <li>Sell</li>
          <li>Contact us</li>
        </Items>
      </ItemWrap>
      <Last>
        <h1>CoinBase Instagram</h1>
        <WrapRec>
          <Rec>
            <img src={Shape} alt="" />
          </Rec>
          <Rec>
            <img src={Shape} alt="" />
          </Rec>
          <Rec>
            <img src={Shape} alt="" />
          </Rec>
          <Rec>
            <img src={Shape} alt="" />
          </Rec>
        </WrapRec>
        <WrapRec>
          <Rec>
            <img src={Shape} alt="" />
          </Rec>
          <Rec>
            <img src={Shape} alt="" />
          </Rec>
          <Rec>
            <img src={Shape} alt="" />
          </Rec>
          <Rec>
            <img src={Shape} alt="" />
          </Rec>
        </WrapRec>
      </Last>
    </Wrapper>
  );
};

export default Footer;
