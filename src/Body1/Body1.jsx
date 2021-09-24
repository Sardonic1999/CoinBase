import React from "react";
import { Wrapper, Left, Right, Img, Button } from "./Body1_Style";
import main from "../assets/imgs/main.png";

const Body1 = () => {
  return (
    <Wrapper>
      <Left>
        <h1>
          We provide easy solution <br />
          to exchange your
          <span>
            Bitcoin/ <br />
            GiftCard for money
          </span>
        </h1>
        <p>
          CoinBase is a platform for trading your bitcoin and <br />
          giftcard at the best rate, why not give us a trial.
        </p>
        <Button>GET STARTED</Button>
      </Left>
      <Right>
        <Img src={main} alt="main" />
      </Right>
    </Wrapper>
  );
};

export default Body1;
