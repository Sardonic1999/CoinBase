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
  margin-top: 150px;
  border-radius: 20px;
`;

export const Page = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #bbbbbb;
  padding: 0px 50px;
  h1 {
    margin: 0px;
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 65px;

    color: rgb(215, 79, 228);
  }
`;
export const ContainerWrap = styled.div`
  display: flex;
`;

export const Wrap = styled.div`
  padding: 50px 0px 50px 60px;
  flex: 1;
`;

export const Items = styled.div`
  display: flex;
  margin-bottom: 30px;
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: auto;

  p {
    margin: 0px 0px;
    padding: 0px 16px;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    color: #333333;
  }
`;

export const Price = styled.div`
  h5 {
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    color: #333333;
    margin: 0px;
    padding-top: 5px;
    padding-bottom: 10px;
    span {
      font-family: Poppins;
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      line-height: 21px;
      color: #333333;
    }
  }
`;

export const Item2 = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;
export const Icon2 = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: auto;

  p {
    margin: 0px 0px;
    padding: 0px 16px 10px 16px;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    color: #333333;
  }
  h3 {
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 21px;
    color: #333333;
    margin: 0px;
    margin-right: 0px;
  }
`;
export const Price2 = styled.div`
  h5 {
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 21px;
    color: #333333;
    margin: 0px;
    padding: 5px 0px 10px 100px;
  }
`;

export const Wrap3 = styled.div`
  padding: 20px 0px 50px 60px;
  flex: 1;
  button {
    width: 90px;
    height: 30px;
    background: linear-gradient(178.18deg, #fd749b -13.56%, #281ac8 158.3%);
    border-radius: 5px;
    color: white;
  }
`;
export const Button = styled.button`
  width: 90px;
  height: 30px;
  background: linear-gradient(178.18deg, #fd749b -13.56%, #281ac8 158.3%);
  border-radius: 5px;
  color: white;
  margin-bottom: 20px;
`;

export const Bank = styled.div`
  display: flex;
  h6 {
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 25px;
    color: #333333;
    padding: 0 5px;
    margin: 0px;
  }
`;

export const BTC = styled.div`
  display: flex;
  margin: 0px 30px 0px 0px;
  width: 270px;
  border-bottom: 1px solid grey;
  h4 {
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 65px;
    color: #333333;
    margin: 0px;
  }
  img {
    padding: 0px 20px;
  }
`;

export const Amazon = styled.div`
  display: flex;
  h3 {
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 25px;
    color: #333333;
  }
  img {
    padding: 20px;
  }
`;

export const Transfer = styled.div`
  h3 {
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 25px;
    color: #333333;
    margin: 0px;
  }
`;
