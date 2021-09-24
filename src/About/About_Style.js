import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 1920px;
  height: fit-content;
  box-sizing: border-box;
  background: white;
  padding: 50px 150px;
`;

export const Left = styled.div`
  background: white;
  flex: 1;
`;

export const Img = styled.img`
  background: white;
`;

export const Right = styled.div`
  background: white;
  flex: 1;
  padding: 0px 0px 0px 100px;
`;

export const Text = styled.div`
  width: 400px;
  background: transparent;
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 35px;
  line-height: 65px;
  color: rgba(253, 116, 155, 1);

  :hover {
    border-bottom: 3px solid #fd749b;
  }
`;

export const Title = styled.div`
  background: transparent;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 40px;
  color: #333333;
  padding: 40px 0px;
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 157px;
  height: 54px;
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  background: linear-gradient(178.18deg, #fd749b -13.56%, #281ac8 158.3%);
  border-radius: 100px;
  color: #ffffff;
  cursor: pointer;
`;
