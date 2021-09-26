import React from "react";
import { Container } from "./Root_Style";
import Navbar from "./Navbar/Navbar";
import Body1 from "./Body1/Body1";
import About from "./About/About";
import Rate from "./Rate/Rate";
import Experiance from "./Experiance/Experiance";
import Trade from "./Trade/Trade";
import Satisfy from "./Satisfy/Satisfy";
import Download from "./Download/Download";
import Mobile from "./Mobile/Mobile";

const Root = () => {
  return (
    <Container>
      <Navbar />
      <Body1 />
      <About />
      <Rate />
      <Experiance />
      <Trade />
      <Satisfy />
      <Download />
      <Mobile />
    </Container>
  );
};

export default Root;
