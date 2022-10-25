import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100px;
  margin-bottom: 40px;
`;

const Wrapper = styled.div`
  padding: 0px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  width: 164px;
  height: 150px;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

const Button = styled.button`
  border-radius: 50px;
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  color: white;
  border: 2px solid white;
  font-family: "Oxanium", cursive;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo src="https://i.imgur.com/x3FIPdr.png" />
        </Left>
        <Center>{/* <Logo>DRIP.</Logo> */}</Center>
        <Right>
          <MenuItem>
            <Button className="hover:scale-110 transition-all">
              Connect Wallet
            </Button>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
