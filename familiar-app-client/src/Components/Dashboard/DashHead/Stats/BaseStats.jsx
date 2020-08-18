import React, { useState, useContext, useEffect } from 'react';
import { DataContext } from '../../../../App';
import styled, { css } from 'styled-components';

const StatsContainer = styled.div`
	display: flex;
	justify-content: space-around;
	min-height: 25px;
	width: 100%;
`;
const Stat = styled.div`
	flex-grow: 1;
	border: 1px solid mintcream;
	border-radius: 5px;
	padding: .5rem;
	color: mintcream;
	background: steelblue;
`;
const Modifier = styled.p`
	font-size: 1rem;
	margin: 0;
`;
const StatName = styled.h1`
	font-size: 1rem;
	margin: 0;
`;

function BaseStats() {
	// console.log('character in BaseStats', character);
	const { modifiers, setModifiers } = useContext(DataContext);

	const statsMap = () => {
		const statShort = [ 'str', 'dex', 'con', 'int', 'wis', 'char' ];
		const statNames = [ 'strength', 'dexterity', 'constitution', 'intelligence', 'wisdom', 'charisma' ];
		const stats = statNames.map((stat, i) => (
			<Stat>
				<StatName>{statShort[i]}</StatName>
				<Modifier>{modifiers[stat]}</Modifier>
			</Stat>
		));

		return stats;
	};

	return <StatsContainer>{statsMap()}</StatsContainer>;
}

export default BaseStats;
