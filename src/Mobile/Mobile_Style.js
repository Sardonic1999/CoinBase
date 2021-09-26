import styled from "styled-components";
import bg5 from "../assets/imgs/bg5.png";

export const MainWrap = styled.div`
  width: 1920px;
  background: white;
  box-sizing: border-box;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 1920px;
  background-image: url(${bg5});
  background-repeat: no-repeat;
  background-size: contain;
  padding-bottom: 100px;
`;

export const Img = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 300px;
  img {
    padding: 0px 30px;
  }
`;

export const WrapSub = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px;
  box-sizing: border-box;
`;

export const Text = styled.div`
  background: transparent;
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 50px;
  line-height: 65px;
  color: rgba(253, 116, 155, 1);
  border-bottom: 4px solid transparent;
  text-decoration: none;
  :hover {
    border-bottom: 4px solid #fd749b;
  }
`;

export const Title = styled.div`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 40px;
  text-align: center;
  color: #333333;
  padding-top: 40px;
`;

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 80px;
  box-sizing: border-box;
  input {
    box-sizing: border-box;
    width: 388px;
    height: 54px;
    border-radius: 100px;
    padding-left: 30px;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    color: #333333;
  }
  button {
    width: 157px;
    height: 54px;
    background: linear-gradient(178.18deg, #fd749b -13.56%, #281ac8 158.3%);
    border-radius: 100px;
    cursor: pointer;
    margin-left: 30px;
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 21px;
    text-align: center;

    color: #ffffff;
  }
`;
