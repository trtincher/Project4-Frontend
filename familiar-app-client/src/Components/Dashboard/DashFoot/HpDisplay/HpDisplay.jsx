import React, { useState, useContext, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { DataContext } from '../../../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartbeat } from '@fortawesome/free-solid-svg-icons';

const HpContainer = styled.div`
	display: flex;
	flex-grow: 3;
	justify-content: space-around;
	align-items: center;
	min-height: 25px;
	border: 1px solid white;
	background: #00bbf9;
	border-radius: 10px;
`;

const Card = styled.div`
	display: flex;
	flex-direction: column;
`;

const Header = styled.h1`
	font-size: 1rem;
	margin: 0;
`;

const Value = styled.p`
	font-size: 1rem;
	margin: 0;
`;

const Icon = styled.div``;

const icon = <FontAwesomeIcon icon={faHeartbeat} size="3x" />;

const HpDisplay = () => {
	const { activeCharacter, setActiveCharacter } = useContext(DataContext);
	const [ current, setCurrent ] = useState(0);
	const [ max, setMax ] = useState(0);
	const [ temp, setTemp ] = useState(0);

	useEffect(
		() => {
			if (activeCharacter.hp !== undefined) {
				setCurrent(activeCharacter.hp.current);
				setMax(activeCharacter.hp.max);
				setTemp(activeCharacter.hp.temp);
			}
		},
		[ activeCharacter ]
	);

	return (
		<HpContainer>
			{icon}
			<Card>
				<Header>Current</Header>
				<Value>{current}</Value>
			</Card>
			<Card>
				<Header>Max</Header>
				<Value>{max}</Value>
			</Card>
			<Card>
				<Header>Temp</Header>
				<Value>{temp}</Value>
			</Card>
		</HpContainer>
	);
};

export default HpDisplay;
