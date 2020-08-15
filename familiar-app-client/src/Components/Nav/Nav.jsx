import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

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
	background: black;
	height: 4px;
	width: 40px;
	margin: 5px auto;
	border-radius: 5px;
`;

const NavLinkContainer = styled.div`
	background: #00f5d4;
	height: 100vh;
	width: 50vw;
	top: 0;
	display: flex;
	flex-direction: column;
	position: fixed;
	z-index: 10;
	left: ${(props) => (props.open ? '0' : '-2000px')};
`;

const NavLink = styled(Link)`
	text-decoration: none;
	color: white;
	margin-top: ${(props) => props.marginTop || ''}
`;

const ExitNavButton = styled.div`
	color: white;
	border: 1px solid white;
	border-radius: 10px;
	width: 40px;
`;

function Nav() {
	const [ isOpen, setIsOpen ] = useState(false);

	const openNav = () => {
		console.log('openNav');
		setIsOpen(!isOpen);
	};

	return (
		<Container>
			<Hamburger onClick={openNav}>
				<Lines />
				<Lines />
				<Lines />
			</Hamburger>
			<NavLinkContainer open={isOpen}>
				<NavLink to="/" marginTop={'50px'} onClick={openNav}>
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
				<NavLink to="/" onClick={openNav}>
					<h1>Logout</h1>
				</NavLink>
				<ExitNavButton onClick={openNav}>
					<h1>X</h1>
				</ExitNavButton>
			</NavLinkContainer>
		</Container>
	);
}

export default Nav;
