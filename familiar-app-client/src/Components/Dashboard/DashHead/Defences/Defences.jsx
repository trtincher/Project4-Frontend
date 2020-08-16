import React, { useState, useContext } from 'react';
import styled, { css } from 'styled-components';

const Container = styled.div`
	display: flex;

	flex-direction: column;
	flex-grow: 2;
	border: 1px solid mintcream;
	border-radius: 10px;
	text-align: center;
	padding: .5rem;
	color: mintcream;
`;

const Header = styled.h1`
	font-size: 1rem;
	margin: 0;
`;

const Text = styled.p`
	font-size: 1rem;
	margin: 0;
	padding: 0;
`;

const Defences = () => {
	return (
		<Container>
			<Header>Defences</Header>
			<Text>none</Text>
		</Container>
	);
};

export default Defences;
