import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 1920px;
  background: white;
  justify-content: center;
  align-items: center;
  padding-bottom: 100px;
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
  padding-top: 30px;
  margin: 0px;
  color: #333333;
  padding-bottom: 30px;
`;

export const Img = styled.div`
  display: flex;
  img {
    width: 200px;
    height: 80px;
    margin-right: 30px;
    margin-left: 30px;
    cursor: pointer;
  }
`;
