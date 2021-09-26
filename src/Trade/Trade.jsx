import React from "react";
import {
  Card,
  Wrapper,
  Text,
  CardWrap,
  CardBtc,
  CardGift,
} from "./Trade_Style";
import bitcoin from "../assets/icons/bitcoin.svg";
import gift from "../assets/icons/gift.svg";

const Trade = () => {
  return (
    <Wrapper>
      <Card>
        <Text>Trade from anywhere</Text>
        <CardWrap>
          <CardBtc>
            <img src={bitcoin} alt="" />
            <p>Bitcoin</p>
          </CardBtc>
          <CardGift>
            <img src={gift} alt="" />
            <p>Gift Cards</p>
          </CardGift>
        </CardWrap>
      </Card>
    </Wrapper>
  );
};

export default Trade;
