import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

const Container = styled.div`
  /* background-image: url("https://i.imgur.com/4sUwxJP.png");
  background-size: cover; */
`;
const Wrapper = styled.div`
  margin-top: 20px;
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
  padding-bottom: 80px;
`;

const Inputbox = styled.div`
  height: 60px;
  width: 463px;
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  margin-bottom: 20px;
  border-radius: 30px;
`;

const SearchContainer = styled.span`
  /* border: 0.5px solid yellow; */
  display: flex;
  align-items: center;
  /* padding-bottom: 20px; */
  /* padding-top: 80px; */
`;

const Input = styled.input`
  opacity: 1 !important;
  margin-left: 20px;
  background-color: transparent;
  border: none;
  color: white;
  font-size: 16px;
  font-family: "Oxanium", cursive;
  &:focus {
    outline: none;
    /* color: white; */
  }
  &::placeholder {
    border: none;
    color: white;
    opacity: 1 !important;
  }
`;

const Button = styled.button`
  padding: 8px 45px;
  font-size: 16px;
  border-radius: 50px;
  background-color: transparent;
  cursor: pointer;
  color: white;
  border: 2px solid white;
  font-family: "Oxanium", cursive;
`;

// const Mid = styled.div`
//   display: flex;
//   flex: 1;
// `;
// const End = styled.div`
//   display: flex;
//   flex: 2;
// `;

const Homepage = () => {
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Heading>Future of Communication</Heading>
        <Line>Connect your wallet to make a call.</Line>
        <Inputbox>
          <SearchContainer>
            <Input placeholder="Enter wallet address...." />
          </SearchContainer>
        </Inputbox>
        <Button className="hover:scale-110 transition-all">Call</Button>
      </Wrapper>
    </Container>
  );
};

export default Homepage;
