import React from "react";
import { Wrapper, Left, Right, Img, Text, Title, Button } from "./About_Style";
import main2 from "../assets/imgs/main2.png";

const About = () => {
  return (
    <Wrapper>
      <Left>
        <Img src={main2} />
      </Left>
      <Right>
        <Text>Welcome to CoinBase</Text>
        <Title>
          We have the best rates . Simply start your exchange right now. Sign{" "}
          <br /> up for our Affiliate program and earn commission from each{" "}
          <br />
          exchange. The earnings are credited in your account instantly and{" "}
          <br /> can be withdrawn right away. Also note some exchange directions{" "}
          <br /> are hidden for unregistered user. To ensure to have access to
          all <br /> our exchange directions and benefits kindly sign up and
          verify your <br /> identity.
        </Title>
        <Button>DISCOVER</Button>
      </Right>
    </Wrapper>
  );
};

export default About;
