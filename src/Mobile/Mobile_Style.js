import styled from "styled-components";
import bg5 from "../assets/imgs/bg5.png";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 1920px;
  height: 1080px;
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
  font-size: 16px;
  line-height: 40px;
  text-align: center;
  color: #333333;
`;
