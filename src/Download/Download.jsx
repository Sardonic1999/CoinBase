import React from "react";
import { Wrapper, Text, Title, Img } from "./Download_Style";
import app from "../assets/imgs/app.png";
import google from "../assets/imgs/google.png";

const Download = () => {
  return (
    <Wrapper>
      <Text>Download our app</Text>
      <Title>
        Discover exclusive deals and discounts with <br /> our mobile
        experience.
      </Title>
      <Img>
        <img src={app} alt="" />
        <img src={google} alt="" />
      </Img>
    </Wrapper>
  );
};

export default Download;
