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

const Container = styled.div`width: 100%;`;

const Header = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
`;

const Title = styled.h1`padding-left: 5rem;`;

const DeleteButton = styled.button`
	background: none;
	border: none;
	text-align: left;
	width: 100%;
`;

const DescriptionBtn = styled.button`
	background: none;
	border: none;
	text-align: left;
	width: 100%;
	padding-right: 20px;
`;

const PlayButton = styled.button`
	background: none;
	border: none;
	text-align: right;
	width: 200%;
	padding-left: 10px;
`;

const Buttons = styled.div`
	display: flex;
	align-items: flex-end;
`;

const AddSpell = styled.button`
	background: none;
	border: none;
	padding-left: 2rem;
`;

const plus = <FontAwesomeIcon icon={faPlusSquare} size="3x" />;
const check = <FontAwesomeIcon icon={faCheckCircle} size="2x" />;
const times = <FontAwesomeIcon icon={faTimesCircle} size="2x" />;
const book = <FontAwesomeIcon icon={faBookOpen} size="2x" />;

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
			<Card
				width="100px"
				height="180px"
				backgroundColor="#9b5de5"
				display="flex"
				justifyContent="space-around"
				alignItems="center"
				flexDirection="column"
			>
				<DeleteButton onClick={() => handleDeleteClick(spell)}>{times}</DeleteButton>
				<h3>{spell.name}</h3>
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
