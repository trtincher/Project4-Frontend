import React, { useState, useContext, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import apiURL from '../../../../apiConfig';
import axios from 'axios';
import styled, { css } from 'styled-components';
import { DataContext } from '../../../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare, faCheckCircle, faTimesCircle, faBookOpen } from '@fortawesome/free-solid-svg-icons';

import CardContainer from '../../../Card/CardContainer';
import Card from '../../../Card/Card';

import SpellList from './SpellCRUD/SpellList';

const Container = styled.div`
	width: 100%;
	min-height: 100vh;
`;

const Header = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	margin: 3rem 0;
`;

const Title = styled.h1`padding-left: 5rem;`;

const DeleteButton = styled.button`
	background: none;
	border: none;
	text-align: left;
	margin-right: 3.5rem;
`;

const DescriptionBtn = styled.button`
	background: none;
	border: none;
	text-align: left;
	width: 100%;
	padding-right: 4rem;
`;

const PlayButton = styled.button`
	background: none;
	border: none;
	text-align: right;
	width: 200%;
`;

const Buttons = styled.div`display: flex;`;

const AddSpell = styled.button`
	background: none;
	border: none;
	padding-left: 2rem;
`;

const plus = <FontAwesomeIcon icon={faPlusSquare} size="3x" />;
const check = <FontAwesomeIcon icon={faCheckCircle} size="1x" />;
const times = <FontAwesomeIcon icon={faTimesCircle} size="1x" />;
const book = <FontAwesomeIcon icon={faBookOpen} size="1x" />;

function ActionHand() {
	const {
		activeCharacter,
		setActiveCharacter,
		setIsHand,
		isHand,
		hand,
		setHand,
		setIsPlayed,
		setActiveAction,
		spellSlots,
		setSpellSlots
	} = useContext(DataContext);
	const [ currentHand, setCurrentHand ] = useState([]);

	// console.log('activeCharacter in Action Hand', activeCharacter);
	// console.log('currentHand in Action', currentHand);

	useEffect(
		() => {
			// console.log('action hand useEffect');

			if (activeCharacter.spells !== undefined && activeCharacter.spells[0] !== null) {
				let h = makeHand();
				setCurrentHand(h);
			}
		},
		[ activeCharacter ]
	);

	const makeHand = () => {
		//sort activeCharacter.spells
		const curHand = activeCharacter.spells.map((spell) => (
			<Card
				width="100px"
				height="180px"
				backgroundColor="#9b5de5"
				display="flex"
				justifyContent="space-around"
				alignItems="center"
				flexDirection="column"
			>
				<Buttons>
					<DeleteButton onClick={() => handleDeleteClick(spell)}>{times}</DeleteButton>
					<h3>{spell.level === 0 ? 'C' : spell.level}</h3>
				</Buttons>

				<h3>{spell.name}</h3>
				<p>
					{spell.components.map((s) => s + ' ')} {spell.ritual ? 'R' : null} {spell.conentration ? 'C' : null}
				</p>
				<Buttons>
					<DescriptionBtn>{book}</DescriptionBtn>
					<PlayButton onClick={() => handleSpellsClick(spell)}>{check}</PlayButton>
				</Buttons>

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
		// console.log('newSpells', newSpells);
		const res = await axios({
			url: `${apiURL}/characters/${activeCharacter._id}`,
			method: 'PUT',
			data: { spells: newSpells }
		});
		// console.log('res im handleDeleteClick', res);
		setActiveCharacter(res.data);
	};

	const handleSpellsClick = async (spell) => {
		setIsPlayed(true);
		setActiveAction(spell);
	};

	const handleAddSpell = () => {
		setHand('SpellList');
	};

	return (
		<Container>
			<Header>
				{isHand && hand === 'Spells' ? <Title>Spells</Title> : null}

				{isHand && hand === 'Spells' ? <AddSpell onClick={handleAddSpell}>{plus}</AddSpell> : null}
			</Header>

			<CardContainer>
				{isHand && hand === 'Spells' ? currentHand : null}
				{isHand && hand === 'SpellList' ? <SpellList /> : null}
			</CardContainer>
		</Container>
	);
}

export default ActionHand;
