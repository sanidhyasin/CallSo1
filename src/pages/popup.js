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
  background-color: rgba(255, 255, 255, 0.1);
  /* border: 10px solid white; */
  /* opacity: 0.2; */
  border: 1px solid white;
  width: 540px;
  height: 208px;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  border-radius: 10px;
  /* padding: 40px; */
`;

const Callup = styled.div`
  display: flex;
  flex-direction: column;
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

const Calldown = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  display: flex;
  padding: 10px 150px;
  /* margin: 20px;
  margin-left: 80px;
  margin-right: 80px; */
  font-size: 16px;
  border-radius: 20px;
  /* background-color: white; */
  cursor: pointer;
  color: white;
  /* border: 2px solid white; */
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
            <Callup>
              <Calling>
                <Callleft>
                  <Callleftin>
                    <IoLogoWhatsapp
                      size={40}
                      style={{ marginLeft: "20px", color: "white" }}
                    />
                  </Callleftin>
                  <Callleftin>
                    <Message>56gd2367d678gf2378</Message>
                    <Message>is calling you</Message>
                  </Callleftin>
                </Callleft>
                <Callright>
                  <AiOutlineCloseCircle
                    className="hover:scale-110 transition-all"
                    size={40}
                    style={{ color: "white", cursor: "pointer" }}
                  />
                </Callright>
              </Calling>
            </Callup>
            <Calldown>
              <div className="flex flex-col">
                <Button
                  className="flex m-2 hover:scale-110 transition-all"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(107, 0, 165, 0.82))",
                  }}
                >
                  Accept Call
                </Button>
                <Button
                  className="flex m-2 hover:scale-110 transition-all"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right,rgba(252, 2, 187, 0.65),rgba(0, 0, 0, 0.8))",
                  }}
                >
                  Decline Call
                </Button>
              </div>
            </Calldown>
          </Callbox>
        </Wrapper>
      </Container>
    </div>
  );
};

export default popup;
