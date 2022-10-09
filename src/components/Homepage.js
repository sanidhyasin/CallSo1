import React from "react";
import styled from "styled-components";

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
  padding-bottom: 80px;
`;

const Inputbox = styled.div`
  height: 60px;
  width: 463px;
  background-color: #354657;
  display: flex;
  margin-bottom: 20px;
  border-radius: 10px;
`;

const SearchContainer = styled.span`
  /* border: 0.5px solid yellow; */
  display: flex;
  align-items: center;
  /* padding-bottom: 20px; */
  /* padding-top: 80px; */
`;

const Input = styled.input`
  margin-left: 20px;
  background-color: #354657;
  border: none;
  color: white;
  font-size: 16px;
  font-family: "Oxanium", cursive;
  &:focus {
    outline: none;
  }
  &::placeholder {
    border: none;
    /* padding: 15px; */
    color: white;
  }
`;

const Button = styled.button`
  padding: 8px 45px;
  font-size: 16px;
  border-radius: 20px;
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
      <Wrapper>
        <Heading>Future of Communication</Heading>
        <Line>Connect your wallet to make a call.</Line>
        <Inputbox>
          <SearchContainer>
            <Input placeholder="Enter wallet address...." />
          </SearchContainer>
        </Inputbox>
        <Button>Call</Button>
      </Wrapper>
    </Container>
  );
};

export default Homepage;
