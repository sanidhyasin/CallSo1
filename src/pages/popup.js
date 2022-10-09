import React from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import { GoPlus } from "react-icons/go";
import { HiMinus } from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";
import { IoLogoWhatsapp } from "react-icons/io";

const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
`;

// const Start = styled.div`
//   display: flex;
//   flex: 1;
//   align-items: flex-end;
// `;
const Heading = styled.h1`
  padding-top: 100px;
  display: flex;
  color: white;
  font-size: 64px;
`;

const Line = styled.p`
  color: white;
  font-size: 20px;
  padding-bottom: 40px;
`;

const Callbox = styled.div`
  background-color: #bfbfbf;
  width: 540px;
  height: 208px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-radius: 10px;
`;
const Calling = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;
const Callicon = styled.div`
  display: flex;
  justify-content: center;
`;

const Message = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  display: flex;
  padding: 8px 45px;
  margin: 20px;
  margin-left: 80px;
  margin-right: 80px;
  font-size: 16px;
  border-radius: 20px;
  background-color: white;
  cursor: pointer;
  color: black;
  border: 2px solid white;
  font-family: "Oxanium", cursive;
  justify-content: center;
`;

const popup = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <Wrapper>
          <Heading>Future of Communication</Heading>
          <Line>Connect your wallet to make a call.</Line>
          <Callbox>
            <Calling>
              <Message>
                56gd2367d678gf2378
              </Message>
              <Message>is calling</Message>
            </Calling>
            <Button>
              <GoPlus />
              Accept Call
            </Button>
            <Button>
              <HiMinus />
              Decline Call
            </Button>
          </Callbox>
        </Wrapper>
      </Container>
    </div>
  );
};

export default popup;
