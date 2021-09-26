import React from "react";
import { Wrapper, Img, WrapSub, Text, Title } from "./Mobile_Style";
import iPhone from "../assets/imgs/iPhone.png";
import iPhone2 from "../assets/imgs/iPhone X.png";

const Mobile = () => {
  return (
    <Wrapper>
      <Img>
        <img src={iPhone2} alt="" />
        <img src={iPhone} alt="" />
      </Img>
      <WrapSub>
        <Text>Subscribe our newsletter</Text>
        <Title></Title>
      </WrapSub>
    </Wrapper>
  );
};

export default Mobile;
