import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 1920px;
  height: fit-content;
  background: white;
  box-sizing: border-box;
`;

export const Left = styled.div`
  flex: 1;
  padding: 100px 0px 50px 200px;
  box-sizing: border-box;
`;

export const Text = styled.div`
  width: 400px;
  background: transparent;
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 50px;
  line-height: 65px;
  color: rgba(253, 116, 155, 1);
  border-bottom: 3px solid transparent;
  text-decoration: none;
  :hover {
    border-bottom: 3px solid #fd749b;
  }
`;
export const Title = styled.div`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 40px;
  color: #333333;
  padding: 40px 0px 30px 0px;
`;

export const Button = styled.button`
  width: 157px;
  height: 54px;
  background: linear-gradient(178.18deg, #fd749b -13.56%, #281ac8 158.3%);
  border-radius: 100px;
  color: white;
  cursor: pointer;
`;

export const Right = styled.div`
  flex: 1;
`;

export const Img = styled.img`
  width: 614px;
  height: 513px;
`;
