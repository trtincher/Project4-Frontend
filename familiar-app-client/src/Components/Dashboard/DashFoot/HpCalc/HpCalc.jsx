import React, { useState, useContext, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { DataContext } from '../../../../App';

const Container = styled.div`
	display: flex;
	justify-content: flex-end;
	width: 100%;
`;
const Unit = styled.div`
	border: 1px solid white;
	background: #00bbf9;
	border-radius: 10px;
	padding: 10px;
	width: 90px;
`;

function HpCalc() {
	const { activeCharacter, setActiveCharacter } = useContext(DataContext);
	const [ currentRange, setCurrentRange ] = useState([]);
	const [ maxRange, setMaxRange ] = useState([]);

	useEffect(
		() => {
			if (activeCharacter.hp !== undefined) {
				let curr = calcCurrRange();
				let max = calcMaxRange();
				setCurrentRange(curr);
				setMaxRange(max);
			}
		},
		[ activeCharacter ]
	);

	const calcCurrRange = () => {
		const currentHp = activeCharacter.hp.current;
		const curr = [];
		for (let i = 1; i <= currentHp; i++) {
			curr.push(i);
		}
		const currMap = curr.map((n) => <p>{n}</p>);
		return currMap;
	};

	const calcMaxRange = () => {
		const maxHp = activeCharacter.hp.max + activeCharacter.hp.temp;
		const max = [];
		for (let i = 1; i <= maxHp; i++) {
			max.push(i);
		}
		const maxMap = max.map((n) => <p>{n}</p>);
		return maxMap;
	};

	return (
		<Container>
			<Unit>{maxRange}</Unit>
			<Unit>{currentRange}</Unit>
		</Container>
	);
}

export default HpCalc;
