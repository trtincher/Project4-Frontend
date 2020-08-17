import React, { useState, useContext, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { DataContext } from '../../../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartbeat } from '@fortawesome/free-solid-svg-icons';

import LongRest from '../LongRest/LongRest';

const HpContainer = styled.div`
	display: flex;
	flex-direction: column;
	flex-grow: 3;
	justify-content: space-around;
	align-items: center;
	height: 70px;
	border: 3px solid white;
	background: steelblue;
	border-radius: 10px;
	padding: 5px;
	margin-left: 3px;
	color: white;
`;

const SubContainer = styled.div`display: flex;`;

const Card = styled.div`
	display: flex;
	flex-direction: column;
`;

const Header = styled.h1`
	font-size: 1rem;
	margin: 0;
	padding: 0 3px;
`;

const Value = styled.h3`
	font-size: 1rem;
	margin: 0;
`;

const Icon = styled.div``;

const icon = <FontAwesomeIcon icon={faHeartbeat} size="2x" />;

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
			<SubContainer>
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
			</SubContainer>
			<SubContainer>
				<LongRest />
			</SubContainer>
		</HpContainer>
	);
};

export default HpDisplay;
