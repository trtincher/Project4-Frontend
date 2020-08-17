import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiceD20 } from '@fortawesome/free-solid-svg-icons';

import Nav from '../Nav/Nav';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;
	background: steelblue;
	margin: 0;
	padding-top: 20%;
`;

const LinkContainer = styled.div`
	display: flex;
	justify-content: center;
	height: 1rem;
`;

const Image = styled.div`margin: 3rem;`;

const LandingLink = styled(Link)`
	display: flex;
	align-item: center;
	justify-content: center;
	text-decoration: none;
	color: white;
	margin: 30px;
	
`;

const Heading = styled.h1`
	color: white;
	font-size: 3rem;
`;
const SubHeading = styled.h2`
	color: white;
	margin: 1rem 0;
	height: 1rem;
`;

function Landing() {
	return (
		<Container>
			<Heading>Familiar</Heading>
			<Image>
				<FontAwesomeIcon icon={faDiceD20} size="10x" color="white" />
			</Image>
			<SubHeading>D&D Character Management App</SubHeading>
			<LinkContainer>
				<LandingLink to="/login">
					<SubHeading>Login</SubHeading>
				</LandingLink>
				<LandingLink to="/signup">
					<SubHeading>Sign Up</SubHeading>
				</LandingLink>
			</LinkContainer>
		</Container>
	);
}

export default Landing;
