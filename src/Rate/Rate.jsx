import React from "react";
import {
  Container,
  Icon,
  Items,
  Page,
  Price,
  Wrap,
  Wrapper,
  ContainerWrap,
  Item2,
  Icon2,
  Price2,
  Wrap3,
  Bank,
  Button,
  BTC,
  Amazon,
  Transfer,
} from "./Rate_Style";
import bitcoin from "../assets/icons/bitcoin.svg";
import vector from "../assets/icons/vector.svg";
import bank from "../assets/icons/bank.svg";
import transfer from "../assets/icons/transfer.svg";
import double from "../assets/icons/double.svg";

const Rate = () => {
  return (
    <Wrapper>
      <Container>
        <Page>
          <h1>OUR RATES</h1>
          <h1>OUR RESERVES</h1>
          <h1>LATEST EXCHANGES</h1>
        </Page>
        <ContainerWrap>
          <Wrap>
            <Items>
              <Icon>
                <img src={bitcoin} alt="" />
                <p>BTC</p>
              </Icon>
              <Price>
                <h5>
                  We Buy @ <span>₦350/$</span>{" "}
                </h5>
                <h5>
                  We Sell @ <span>₦370/$</span>{" "}
                </h5>
              </Price>
            </Items>
            <Items>
              <Icon>
                <img src={vector} alt="" />
                <p>ETH</p>
              </Icon>
              <Price>
                <h5>
                  We Buy @ <span>₦350/$</span>{" "}
                </h5>
                <h5>
                  We Sell @ <span>₦370/$</span>{" "}
                </h5>
              </Price>
            </Items>
          </Wrap>
          <Wrap>
            <Item2>
              <Icon2>
                <img src={bank} alt="" />
                <p>Bank Transfer</p>
              </Icon2>
              <Price2>
                <h5>#3452030300303.24/$</h5>
              </Price2>
            </Item2>
            <Item2>
              <Icon2>
                <img src={bank} alt="" />
                <p>Bank Transfer</p>
                <h3>399.98 BTC</h3>
              </Icon2>
            </Item2>
            <Item2>
              <Icon2>
                <img src={bank} alt="" />
                <p>Bank Transfer</p>
                <h3>1000.00 ETH</h3>
              </Icon2>
            </Item2>
          </Wrap>
          <Wrap3>
            <Button>8 hours ago</Button>
            <Bank>
              <h6>Bitcoin BTC</h6>
              <img src={transfer} alt="" />
              <h6>Bank</h6>
            </Bank>
            <Transfer>
              <h3>Transfer NGN</h3>
            </Transfer>
            <BTC>
              <h4>1.16BTC</h4>
              <img src={double} alt="" />
              <h4>696152299929.23 NGN</h4>
            </BTC>
            <Amazon>
              <h3>Amazon Card</h3>
              <img src={transfer} alt="" />
              <h3>Bank</h3>
            </Amazon>
            <Transfer>
              <h3>Transfer NGN</h3>
            </Transfer>
          </Wrap3>
        </ContainerWrap>
      </Container>
    </Wrapper>
  );
};

export default Rate;
