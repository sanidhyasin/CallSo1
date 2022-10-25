import React from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiOutlineCloseCircle } from "react-icons/ai";

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

const Callbox = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  /* border: 10px solid white; */
  /* opacity: 0.2; */
  border: 1px solid white;
  width: 540px;
  height: 92px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-radius: 10px;
  /* padding: 40px; */
`;
const Calling = styled.div`
  opacity: 1;
  display: flex;
  flex-direction: row;
  margin-right: 30px;
  justify-content: space-between;
  /* margin-top: 20px; */
`;

const Callleft = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
`;

const Callleftin = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;
  margin-right: 20px;
`;

const Callright = styled.div`
  display: flex;
  flex-direction: column;
`;

const Message = styled.div`
  display: flex;
  justify-content: start;
  color: white;
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
                <Callleftin>
                  <IoLogoWhatsapp
                    size={40}
                    style={{ marginLeft: "20px", color: "white" }}
                  />
                </Callleftin>
                <Callleftin>
                  <Message>You are calling</Message>
                  <Message>" 56gd2367d678gf2378 "</Message>
                </Callleftin>
              </Callleft>
              <Callright>
                <AiOutlineCloseCircle
                  className="hover:scale-125 transition-all"
                  size={40}
                  style={{ color: "white", cursor: "pointer" }}
                />
              </Callright>
            </Calling>
          </Callbox>
        </Wrapper>
      </Container>
    </div>
  );
};

export default calling;
