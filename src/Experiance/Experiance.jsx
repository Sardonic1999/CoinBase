import React from "react";
import {
  Left,
  Right,
  Wrapper,
  Text,
  Title,
  Button,
  Img,
} from "./Experiance_Style";
import main3 from "../assets/imgs/main3.png";
const Experiance = () => {
  return (
    <Wrapper>
      <Left>
        <Text>
          Great experience <br /> with CoinBase
        </Text>
        <Title>
          CoinBase is an online site and a p2admin platform that allows <br />{" "}
          users to buy, sell and/ or exchange digital and fiat assets safely.{" "}
          <br /> Owned and managed by CoinBase Business Services established{" "}
          <br /> and Incoperated in Nigeria.
        </Title>
        <Button>DISCOVER</Button>
      </Left>
      <Right>
        <Img src={main3} />
      </Right>
    </Wrapper>
  );
};

export default Experiance;
