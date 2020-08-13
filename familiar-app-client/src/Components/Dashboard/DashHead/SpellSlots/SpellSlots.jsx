import React, { useState, useContext, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { DataContext } from '../../../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagic } from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
	display: flex;
	flex-grow: 1;
	justify-content: space-between;
	min-height: 25px;
	border: 1px solid white;
	background: #00bbf9;
	border-radius: 10px;
`;

const SlotContainer = styled.div`display: flex;`;

const Slot = styled.div`
	border: 1px solid white;
	width: 2rem;
	margin: 3px 5px;
	border-radius: 10px;
`;

const Value = styled.h1`
	font-size: 2rem;
	margin: 0;
`;

const Icon = styled.div`
	padding: 5px;
	margin-left: 5px;
`;

const icon = <FontAwesomeIcon icon={faMagic} size="2x" />;

const SpellSlot = () => {
	const [ spellSlots, setSpellSlots ] = useState([]);
	const { activeCharacter, setActiveCharacter } = useContext(DataContext);

	useEffect(
		() => {
			let s = determineSlots();
			setSpellSlots(s);
		},
		[ activeCharacter ]
	);

	const slotLvls = {
		1: 1,
		2: 1,
		3: 2,
		4: 2,
		5: 3,
		6: 3,
		7: 4,
		8: 4,
		9: 5,
		10: 5,
		11: 6,
		12: 6,
		13: 7,
		14: 7,
		15: 8,
		16: 8,
		17: 9,
		18: 9,
		19: 9,
		20: 9
	};

	const determineSlots = () => {
		let lvl = activeCharacter.level;
		let spellLvl = slotLvls[lvl];
		let spellSlots = activeCharacter.spellSlots;
		const slots = [];
		for (let i = 1; i <= spellLvl; i++) {
			let slot = (
				<Slot>
					<Value>{i}</Value>
				</Slot>
			);
			for (let j = 1; j <= spellSlots[i]; j++) {
				console.log('j in spellSlots', j);
				slots.push(slot);
			}
		}
		return slots;
	};

	return (
		<Container>
			<Icon>{icon}</Icon>
			<SlotContainer>{spellSlots}</SlotContainer>
		</Container>
	);
};

export default SpellSlot;
