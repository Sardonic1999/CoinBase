import React from "react";
import { Container } from "./Root_Style";
import Navbar from "./Navbar/Navbar";
import Body1 from "./Body1/Body1";

const Root = () => {
  return (
    <Container>
      <Navbar />
      <Body1 />
    </Container>
  );
};

export default Root;
