import React from "react";
import { TextWrap, Wrapper, Text, Title } from "./Satisfy_Style";
import Happy from "../assets/imgs/Happy.png";

const Satisfy = () => {
  return (
    <Wrapper>
      <TextWrap>
        <Text>
          10,000 Satisfied clients <br /> around the world
        </Text>
        <Title>
          Yeah! we’re proud with numbers. We’ve helped thousands of clients{" "}
          <br /> all: ; around the world with our bespoke service. Hover ontop
          of them <br /> pic to view their testimonials.
        </Title>
      </TextWrap>
      <img src={Happy} alt="" />
    </Wrapper>
  );
};

export default Satisfy;
