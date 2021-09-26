import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 1920px;
  height: 350px;
  background: #151515;
  justify-content: center;
  align-items: center;
  padding-bottom: 100px;
`;

export const Coin = styled.div`
  flex: 2;
  padding: 80px 100px;
  p {
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 24px;
    color: #a2a2a2;
    margin: 0px;
    padding: 20px 0px;
  }
  img {
    width: 150px;
  }
`;

export const Apps = styled.div`
  display: flex;
  padding-top: 20px;
  img {
    width: 20px;
    height: 20px;
    padding-right: 20px;
  }
`;
export const ItemWrap = styled.div`
  display: flex;
  box-sizing: border-box;
`;
export const Items = styled.div`
  width: 200px;
  flex: 1;
  padding: 80px 50px;

  h1 {
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 30px;
    color: #ffffff;
  }
  li {
    list-style-type: none;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 30px;
    color: #a2a2a2;
  }
`;

export const Last = styled.div`
  flex: 1;
  padding: 80px 100px;
  box-sizing: border-box;

  h1 {
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 24px;
    color: #ffffff;
    padding-bottom: 10px;
  }
`;
export const WrapRec = styled.div`
  display: flex;
  box-sizing: border-box;
`;

export const Rec = styled.div`
  display: flex;
  margin: 10px;
  cursor: pointer;
  background: #c4c4c4;
  width: 80px;
  height: 80px;
  align-items: center;
  justify-content: center;
  img {
    width: 60px;
    height: 60px;
  }
`;
