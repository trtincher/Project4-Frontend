import React, { useState, useContext, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { DataContext } from '../../../../App';

const StatsContainer = styled.div`
	display: flex;
	justify-content: space-around;
	min-height: 25px;
`;
const Stat = styled.div`
	border: 1px solid mintcream;
	border-radius: 5px;
	padding: .5rem;
	color: mintcream;
`;
const Modifier = styled.p`
	font-size: 1rem;
	margin: 0;
`;
const StatName = styled.h1`
	font-size: 1rem;
	margin: 0;
`;

function SecoundaryStats({ character }) {
	// console.log('character in BaseStats', character);
	const { modifiers, prof, setProf, activeCharacter } = useContext(DataContext);
	const [ currentCharacter, setCurrentCharacter ] = useState({
		baseStats: ''
	});

	useEffect(
		() => {
			if (activeCharacter !== undefined) {
				setCurrentCharacter(activeCharacter);
				let p = calcProf();
				setProf(p);
			}
		},
		[ activeCharacter ]
	);

	let init = modifiers.dexterity;

	const calcProf = () => {
		const profTable = {
			1: 2,
			2: 2,
			3: 2,
			4: 2,
			5: 3,
			6: 3,
			7: 3,
			8: 3,
			9: 4,
			10: 4,
			11: 4,
			12: 4,
			13: 5,
			14: 5,
			15: 5,
			16: 5,
			17: 6,
			18: 6,
			19: 6,
			20: 6
		};

		return profTable[activeCharacter.level];
	};

	return (
		<StatsContainer>
			<Stat>
				<StatName>Speed</StatName>
				<Modifier>{currentCharacter.movement}</Modifier>
			</Stat>
			<Stat>
				<StatName>Init</StatName>
				<Modifier>{init}</Modifier>
			</Stat>
			<Stat>
				<StatName>Armor</StatName>
				<Modifier>{currentCharacter.armorClass}</Modifier>
			</Stat>
			<Stat>
				<StatName>Prof</StatName>
				<Modifier>{prof}</Modifier>
			</Stat>
		</StatsContainer>
	);
}

export default SecoundaryStats;
