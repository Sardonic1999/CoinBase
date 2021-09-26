import React from "react";
import {
  MainWrap,
  Wrapper,
  Img,
  WrapSub,
  Text,
  Title,
  Button,
} from "./Mobile_Style";
import iPhone from "../assets/imgs/iPhone.png";
import iPhone2 from "../assets/imgs/iPhone X.png";

const Mobile = () => {
  return (
    <MainWrap>
      <Wrapper>
        <Img>
          <img src={iPhone2} alt="" />
          <img src={iPhone} alt="" />
        </Img>
        <WrapSub>
          <Text>Subscribe our newsletter</Text>
          <Title>
            Subscribe to our newsletter for daily/weekly <br /> update of our
            products and services.
          </Title>
          <Button>
            <input placeholder="Email" />
            <button>DISCOVER</button>
          </Button>
        </WrapSub>
      </Wrapper>
    </MainWrap>
  );
};

export default Mobile;
