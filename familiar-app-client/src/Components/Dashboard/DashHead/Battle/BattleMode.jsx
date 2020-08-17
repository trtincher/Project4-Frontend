import React, { useState, useContext } from 'react';
import styled, { css } from 'styled-components';

const Container = styled.div`
	border-radius: 5px;
	display: flex;
	justify-content: center;
	padding: .5rem;
`;

const Unit = styled.div`
	display: flex;
	border: 1px solid white;
	background: steelblue;
	border-radius: 5px;
	padding: .5rem;
	margin: 0 .5rem;
	color: mintcream;
`;

const Heading = styled.h1`
	font-size: .7rem;
	padding: 0;
	margin: 0 .2rem;
`;

const Value = styled.h1`
	font-size: .7rem;
	padding: 0 3px;
	margin: 0 .2rem;
	border: 1px solid mintcream;
	border-radius: 5px;
`;

function BattleMode() {
	return (
		<Container>
			<Unit>
				<Heading>Actions</Heading>
				<Value>1</Value>
			</Unit>
			<Unit>
				<Heading>Bonus Actions</Heading>
				<Value>1</Value>
			</Unit>
			<Unit>
				<Heading>Reactions</Heading>
				<Value>1</Value>
			</Unit>
			<Unit>
				<Heading>Next Round</Heading>
			</Unit>
		</Container>
	);
}

export default BattleMode;
