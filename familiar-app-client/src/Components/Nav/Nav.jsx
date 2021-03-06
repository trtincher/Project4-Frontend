import React, { useState, useContext } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { DataContext } from "../../App";

const Container = styled.div``;

const Hamburger = styled.div`
  position: fixed;
  top: 25px;
  left: 10px;
  align-items: center;
  width: 70px;
  height: 70px;
  z-index: 100;
`;

const Lines = styled.div`
  background: mintcream;
  height: 4px;
  width: 40px;
  margin: 5px auto;
  border-radius: 5px;
`;

const NavLinkContainer = styled.div`
  background: lightslategray;
  height: 100vh;
  width: 50vw;
  top: 0;
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 10;
  left: ${(props) => (props.open ? "0" : "-2000px")};
  transition: all 500ms ease;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: mintcream;
  margin-top: ${(props) => props.marginTop || ""};
`;

const ExitNav = styled.div`
  width: 5vw;
  height: 100vh;
  width: 50vw;
  top: 0;
  position: fixed;
  z-index: 10;
  right: ${(props) => (props.open ? "0" : "-2000px")};
`;

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const {
    activeUser,
    setActiveUser,
    modifiers,
    setModifiers,
    isDice,
    setIsDice,
    activeCharacter,
    setActiveCharacter,
  } = useContext(DataContext);

  const openNav = () => {
    setIsOpen(!isOpen);
  };

  const resetState = () => {
    setActiveUser([]);
    setActiveCharacter({});
  };

  return (
    <Container>
      <Hamburger onClick={openNav}>
        <Lines />
        <Lines />
        <Lines />
      </Hamburger>
      <NavLinkContainer open={isOpen}>
        <NavLink to="/" marginTop={"50px"} onClick={openNav}>
          <h1>Home</h1>
        </NavLink>
        <NavLink to="/dashboard" onClick={openNav}>
          <h1>Dashboard</h1>
        </NavLink>
        <NavLink to="/characters" onClick={openNav}>
          <h1>Select Character</h1>
        </NavLink>
        <NavLink to="/editUser" onClick={openNav}>
          <h1>Edit Account</h1>
        </NavLink>
        <NavLink to="/" onClick={(openNav, resetState)}>
          <h1>Logout</h1>
        </NavLink>
      </NavLinkContainer>
      <ExitNav open={isOpen} onClick={openNav} />
    </Container>
  );
}

export default Nav;
