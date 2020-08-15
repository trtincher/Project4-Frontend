import React, { useState, useContext, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import apiURL from '../../../../apiConfig';
import axios from 'axios';
import styled, { css } from 'styled-components';
import { DataContext } from '../../../../App';

import CardContainer from '../../../Card/CardContainer';
import Card from '../../../Card/Card';

import SpellList from './SpellCRUD/SpellList';

const Container = styled.div``;

function ActionHand() {
	const {
		activeCharacter,
		setActiveCharacter,
		setIsHand,
		isHand,
		hand,
		setHand,
		setIsPlayed,
		setActiveAction
	} = useContext(DataContext);
	const [ currentHand, setCurrentHand ] = useState([]);

	console.log('activeCharacter in Action Hand', activeCharacter);
	console.log('currentHand in Action', currentHand);

	useEffect(
		() => {
			console.log('action hand useEffect');

			if (activeCharacter.spells !== undefined && activeCharacter.spells[0] !== null) {
				let h = makeHand();
				setCurrentHand(h);
			}
		},
		[ activeCharacter ]
	);

	const makeHand = () => {
		const curHand = activeCharacter.spells.map((spell) => (
			<Card width="100px" height="180px" backgroundColor="#9b5de5">
				<h3>{spell.name}</h3>
				<button onClick={() => handleSpellsClick(spell)}>Play</button>
				<button onClick={() => handleDeleteClick(spell)}>Delete</button>
				{/* <button onClick={() => handlePrepareClick(spell)}>Prepare</button> */}
			</Card>
		));
		return curHand;
	};

	// const handlePrepareClick = async (spell) => {
	// 	const spells = activeCharacter.spells;
	// 	const updatedSpells = spells.map((s) => {
	// 		if (spell.index === s.index && s.prepared) {
	// 			s['prepared'] = !s.prepared;
	// 		}
	// 	});
	// 	const res = await axios({
	// 		url: `${apiURL}/characters/${activeCharacter._id}`,
	// 		method: 'PUT',
	// 		data: { spells: updatedSpells }
	// 	});
	// 	console.log('res in handlePreparedClick', res);
	// 	setActiveCharacter(res.data);
	// };

	const handleDeleteClick = async (spell) => {
		let oldSpells = activeCharacter.spells;
		let newSpells = oldSpells.filter((s) => s.index !== spell.index);
		console.log('newSpells', newSpells);
		const res = await axios({
			url: `${apiURL}/characters/${activeCharacter._id}`,
			method: 'PUT',
			data: { spells: newSpells }
		});
		console.log('res im handleDeleteClick', res);
		setActiveCharacter(res.data);
	};

	const handleSpellsClick = (action) => {
		setIsPlayed(true);
		setActiveAction(action);
	};

	const handleAddSpell = () => {
		setHand('SpellList');
	};

	return (
		<Container>
			{isHand && hand === 'Spells' ? <button onClick={handleAddSpell}>Add Spell</button> : null}
			{isHand && hand === 'Spells' ? <h1>Spells</h1> : null}
			<CardContainer>
				{isHand && hand === 'Spells' ? currentHand : null}
				{isHand && hand === 'SpellList' ? <SpellList /> : null}
			</CardContainer>
		</Container>
	);
}

export default ActionHand;
