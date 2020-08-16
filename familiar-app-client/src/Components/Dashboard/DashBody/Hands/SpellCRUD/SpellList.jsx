import React, { useState, useContext, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import apiURL from '../../../../../apiConfig';
import axios from 'axios';
import styled, { css } from 'styled-components';
import { DataContext } from '../../../../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare, faBookOpen } from '@fortawesome/free-solid-svg-icons';

import CardContainer from '../../../../Card/CardContainer';
import Card from '../../../../Card/Card';

const Container = styled.div`text-align: center;`;

const DetailCard = styled.div`
	background: red;
	border: 2px solid white;
	border-radius: 10px;
	width: 180px;
	height: 260px;
	margin: 15px 30%;
	padding: 1rem;
	position: absolute;
	top: 300px;
`;

const book = <FontAwesomeIcon icon={faBookOpen} size="2x" />;
const plus = <FontAwesomeIcon icon={faPlusSquare} size="2x" />;

const DescriptionBtn = styled.button`
	background: none;
	border: none;
	text-align: left;
	width: 100%;
	padding-right: 20px;
`;

const AddButton = styled.button`
	background: none;
	border: none;
	text-align: right;
	width: 100%;
	padding-left: 10px;
`;

const Buttons = styled.div`
	display: flex;
	align-items: flex-end;
`;

const Button = styled.button`
	background: #9b5de5;
	border: 1px solid white;
	color: white;
	margin: 5px;
	border-radius: 5px;
`;

const Input = styled.input`
	height: 2.5rem;
	border-radius: 5px;
`;

function SpellList() {
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

	console.log('setACtiveCharacter 1', setActiveCharacter);

	const [ currentHand, setCurrentHand ] = useState([]);
	const [ spells, setSpells ] = useState([]);
	const [ searchInput, setSearchInput ] = useState('');
	const [ spellDetails, setSpellDetails ] = useState({});

	// console.log('activeCharacter in Action Hand', activeCharacter);
	// console.log('currentHand in SpellList', currentHand);
	// console.log('allSpells in SpellList', spells);
	console.log('spellDetails', spellDetails);

	useEffect(() => {
		console.log('action hand useEffect');
		getSpells();
	}, []);

	// const handleSpellsClick = (action) => {
	// 	setIsPlayed(true);
	// 	setActiveAction(action);
	// };

	const getSpells = () => {
		axios('https://www.dnd5eapi.co/api/spells/')
			.then((res) => {
				let results = res.data.results;
				setSpells(results);
				return results;
			})
			.then((results) => makeHand(results))
			.catch(console.error);
	};

	const getSpellDetails = (index) => {
		axios(`https://www.dnd5eapi.co/api/spells/${index}`)
			.then((res) => {
				let data = res.data;
				setSpellDetails(data);
				return data;
			})
			.then((data) => console.log('Details data', data))
			.catch(console.error);
	};

	const detailCard = (spell) => {
		// return (
		// 	<DetailCard>
		// 		<h4>{spell.name} Details</h4>
		// 		<h5>Discription</h5>
		// 		<p>spell.desc</p>
		// 		<p>Higher Level: {spell.higher_level}</p>
		// 		<p>Range: {spell.range}</p>
		// 		<p>Components: {spell.components}</p>
		// 	</DetailCard>
		// );
	};

	const addSpell = async (index) => {
		//get full spell
		const spell = await axios.get(`https://www.dnd5eapi.co/api/spells/${index}`).catch(console.error);

		//add new spell to oldSpell array
		let oldSpells = activeCharacter.spells;
		let newSpells = [ ...oldSpells, spell.data ];

		//update spells with newSpells array
		const response = await axios({
			url: `${apiURL}/characters/${activeCharacter._id}`,
			method: 'PUT',
			data: { spells: newSpells }
		}).catch(console.error);

		console.log('Spell added', response);
		setActiveCharacter(response.data);
	};

	const makeHand = (spells) => {
		console.log('spells in makeHand', spells);
		const curHand = spells.map((spell) => (
			<Card
				width="100px"
				height="180px"
				backgroundColor="#9b5de5"
				display="flex"
				justifyContent="space-around"
				alignItems="center"
				flexDirection="column"
			>
				<h3>{spell.name}</h3>
				<Buttons>
					<DescriptionBtn>{book}</DescriptionBtn>
					<AddButton onClick={() => addSpell(spell.index)}>{plus}</AddButton>
				</Buttons>
			</Card>
		));
		setCurrentHand(curHand);
	};

	const spellNameFilter = () => {
		const filteredSpells = spells.filter((spell) => spell.name == searchInput);
		makeHand(filteredSpells);
	};

	const handleSubmit = (e) => {
		console.log('HandleSubmit');
		e.preventDefault();
		console.log('handle spell search submit', searchInput);
		spellNameFilter();
	};

	const handleSearchChange = (e) => {
		console.log('handleSearchChange', e.target.value);
		setSearchInput(e.target.value);
	};

	return (
		<Container>
			<Button onClick={() => setHand('Spells')}>
				<h3>Your Spells</h3>
			</Button>
			<Button onClick={getSpells}>
				<h3>All Spells</h3>
			</Button>
			<h1>Spell List</h1>
			<form onSubmit={handleSubmit}>
				<Input
					placeholder="search by name"
					type="text"
					name="name"
					value={searchInput.name}
					onChange={handleSearchChange}
				/>
				<Button type="submit">
					<h3>Submit</h3>
				</Button>
			</form>
			<CardContainer>{currentHand[0] !== undefined ? currentHand : 'loading...'}</CardContainer>
		</Container>
	);
}

export default SpellList;
