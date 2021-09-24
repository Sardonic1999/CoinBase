import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 1920px;
  height: 120px;
  background: white;
  align-items: center;
  justify-content: center;
  text-align: center;
  box-sizing: border-box;
`;

export const Logo = styled.img`
  background: transparent;
  margin-right: auto;
  padding: 50px 100px;
  cursor: pointer;
`;

export const Pages = styled.div`
  flex: 1;
  list-style-type: none;
  display: flex;
  justify-content: center;
  margin-right: auto;
  background: transparent;
  box-sizing: border-box;

  li {
    font-family: Poppins;
    background: transparent;
    list-style-type: none;
    margin-right: 70px;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    color: #333333;
    cursor: pointer;
    :hover {
      border-bottom: 3px solid #fd749b;
    }
  }
`;

export const Login = styled.div`
  background: transparent;

  select {
    border: none;
    outline: none;
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    background: transparent;
    color: #333333;
    cursor: pointer;
  }
  button {
    cursor: pointer;
    width: 160px;
    height: 60px;
    background: linear-gradient(178.18deg, #fd749b -13.56%, #281ac8 158.3%);
    border-radius: 100px;
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    margin: 0px 100px 0px 50px;
    color: #ffffff;
  }
`;
