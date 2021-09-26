import styled from "styled-components";
import bg3 from "../assets/imgs/bg3.svg";

export const Wrapper = styled.div`
  display: flex;
  width: 1920px;
  height: 800px;
  background: white;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url(${bg3});
  align-items: center;
  justify-content: center;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 980px;
  height: 504px;
  border-radius: 20px;
  background: #ffffff;
  box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
`;

export const Text = styled.div`
  background: transparent;
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 65px;
  color: rgba(253, 116, 155, 1);
  border-bottom: 3px solid transparent;
  text-decoration: none;
  margin: 30px 0;
  :hover {
    border-bottom: 3px solid #fd749b;
  }
`;

export const CardWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardBtc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 262px;
  height: 226px;
  background: #ffffff;
  border-radius: 15px;
  margin-right: 70px;
  cursor: pointer;
  border: 1px solid rgba(253, 116, 155, 1);
  img {
    width: 50px;
    height: 50px;
  }
  p {
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    text-align: center;

    color: #333333;
  }
`;
export const CardGift = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 262px;
  height: 226px;
  background: #ffffff;
  border-radius: 15px;
  cursor: pointer;

  border: 1px solid rgba(253, 116, 155, 1);

  p {
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    text-align: center;

    color: #333333;
  }
`;
