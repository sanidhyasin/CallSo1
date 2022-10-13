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
  padding-top: 150px;
  margin-bottom: 30px;
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
  height: 92px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-radius: 10px;
  /* padding: 40px; */
`;
const Calling = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 30px;
  /* margin-top: 20px; */
`;
const Callleft = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;
  margin-right: 20px;
`;

const Message = styled.div`
  display: flex;
  justify-content: start;
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

const calling = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <Wrapper>
          <Heading>Connection is being established...</Heading>
          {/* <Line>Connect your wallet to make a call.</Line> */}
          <Callbox>
            <Calling>
              <Callleft>
                <IoLogoWhatsapp size={40} style={{ marginLeft: "20px" }} />
              </Callleft>
              <Callleft>
                <Message>You are calling</Message>
                <Message>" 56gd2367d678gf2378 "</Message>
              </Callleft>
            </Calling>
          </Callbox>
        </Wrapper>
      </Container>
    </div>
  );
};

export default calling;
