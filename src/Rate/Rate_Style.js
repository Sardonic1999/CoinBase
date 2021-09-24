import styled from "styled-components";
import bg2 from "../assets/imgs/bg2.png";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1920px;
  height: 1040px;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${bg2});
  box-sizing: border-box;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  width: 1158px;
  height: 367px;
  border: 1px solid red;
  margin-top: 150px;
  border-radius: 20px;
`;

export const Page = styled.div`
  display: flex;
  justify-content: space-between;
  background: transparent;
  border-bottom: 1px solid red;
  padding: 0px 50px;
  h1 {
    margin: 0px;
    background: transparent;
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 65px;
    color: rgba(253, 116, 155, 1);
  }
`;
