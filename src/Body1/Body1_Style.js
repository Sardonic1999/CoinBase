import styled from "styled-components";
import bg from "../assets/imgs/bg.png";

export const Wrapper = styled.div`
  display: flex;
  width: 1920px;
  height: 1080px;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: contain;
  box-sizing: border-box;
`;

export const Left = styled.div`
  background: transparent;
  h1 {
    font-family: Poppins;
    font-style: normal;
    font-weight: 100;
    font-size: 50px;
    line-height: 60px;
    background: transparent;
    color: #ffffff;
    margin: 0px;
    padding: 150px 0px 0px 200px;
    span {
      font-family: Poppins;
      font-style: normal;
      font-weight: normal;
      font-size: 50px;
      line-height: 60px;
      background: transparent;
      color: #ffffff;
      margin: 0px;
    }
  }
  p {
    font-family: Poppins;
    font-style: normal;
    font-weight: 100;
    font-size: 20px;
    line-height: 27px;
    background: transparent;
    color: #ffffff;
    margin: 0px;
    padding: 30px 200px;
  }
`;

export const Button = styled.div`
  display: flex;
  width: 200px;
  height: 70px;
  background: #ffffff;
  border-radius: 100px;
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  cursor: pointer;
  line-height: 21px;
  text-align: center;
  align-items: center;
  justify-content: center;
  color: rgba(253, 116, 155, 1);
  margin-left: 200px;
  margin-top: 10px;
  :hover {
    background: rgba(40, 26, 200, 0.8);
  }
`;

export const Right = styled.div`
  background: transparent;
  padding: 100px;
`;

export const Img = styled.img`
  width: 728px;
  height: 570px;
  background: none;
`;
