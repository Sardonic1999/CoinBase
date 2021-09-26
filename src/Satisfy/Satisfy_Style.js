import styled from "styled-components";
import bg4 from "../assets/imgs/bg4.png";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 1920px;
  height: 1980px;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${bg4});
`;

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 600px;
`;

export const Text = styled.div`
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 42px;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
`;

export const Title = styled.div`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 40px;
  text-align: center;
  padding-top: 70px;
  color: #ffffff;
`;
