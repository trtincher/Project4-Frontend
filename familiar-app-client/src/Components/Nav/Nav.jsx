import React from 'react';
import styled, { css } from 'styled-components';

const Container = styled.div``;

const Hamburger = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	background: #00bbf9;
	width: 70px;
	height: 70px;
	border: 1px solid white;
	border-radius: 10px;
`;

const Lines = styled.div`
	background: white;
	height: 4px;
	width: 60px;
	border-radius: 5px;
`;

function Nav() {
	return (
		<Container>
			<Hamburger>
				<Lines />
				<Lines />
				<Lines />
			</Hamburger>
		</Container>
	);
}

export default Nav;
