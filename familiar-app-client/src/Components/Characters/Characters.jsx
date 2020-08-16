import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../../App';
import apiURL from '../../apiConfig';
import axios from 'axios';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import Card from '../Card/Card';
import CardContainer from '../Card/CardContainer';
import CreateCharacter from '../CreateCharacter/CreateCharacter';

const Container = styled.div`
	background: #9b5de5;
	height: 100vh;
	padding: 6rem 0;
	color: white;
`;

const CreateLink = styled(Link)`
	text-decoration: none;
	color: white;
	background: none;
	box-shadow: none;


`;

const PlayButton = styled.button`
	background: none;
	border: none;
	text-align: right;
	width: 200%;
	padding-left: 2rem;
	color: mintcream;
`;

const DeleteButton = styled.button`
	background: none;
	border: none;
	text-align: left;
	width: 100%;
	padding-right: 2rem;
	color: mintcream;
`;

const Buttons = styled.div`
	display: flex;
	align-items: flex-end;
	color: mintcream;
`;

const times = <FontAwesomeIcon icon={faTimesCircle} size="2x" />;
const check = <FontAwesomeIcon icon={faCheckCircle} size="2x" />;

function Characters(props) {
	const { activeUser, setActiveUser } = useContext(DataContext);
	const { activeCharacter, setActiveCharacter } = useContext(DataContext);
	const [ characters, setCharacters ] = useState([]);
	const [ userName, setUserName ] = useState('');

	console.log('activeUser in Characters', activeUser);
	console.log('props in Characters', props);

	useEffect(
		() => {
			if (activeUser[0] !== undefined) {
				setCharacters(activeUser[0].characters);
				setUserName(activeUser[0].name);
			}
		},
		[ activeUser ]
	);

	const handleCharacterClick = (character) => {
		setActiveCharacter(character);
		props.history.push('/dashboard');
	};

	const handleDeleteClick = async (character) => {
		const deleteCharacter = async () => {
			try {
				//make character
				const res = await axios({
					url: `${apiURL}/characters/${character._id}`,
					method: 'DELETE'
				});

				console.log('res in DeleteCharacter', res);
				// push character into user characters array
			} catch (err) {
				console.error(err);
			}
		};

		const getUpdatedCharacter = async () => {
			try {
				const user = await axios({
					url: `${apiURL}/users/${activeUser[0]._id}`,
					method: `GET`
				});
				console.log('user in DeleteCharacter', user.data);
				setActiveUser(user.data);
			} catch (err) {
				console.error(err);
			}
		};

		await deleteCharacter();
		await getUpdatedCharacter();
	};

	const characterMap = characters.map((character) => (
		<Card
			key={character.id}
			display="flex"
			justifyContent="space-around"
			alignItems="center"
			flexDirection="column"
			color="mintcream"
		>
			<h3>{character.name}</h3>
			<h5>{character.race}</h5>
			<h4>{character.class}</h4>
			<h5>{`Level: ${character.level}`}</h5>
			<Buttons>
				<DeleteButton onClick={() => handleDeleteClick(character)}>
					<h2>{times}</h2>
				</DeleteButton>
				<PlayButton onClick={() => handleCharacterClick(character)}>
					<h2>{check}</h2>
				</PlayButton>
			</Buttons>
		</Card>
	));

	return (
		<Container>
			<h1>{userName}</h1>
			<h2>Select Your Character</h2>
			<CreateLink to="/createCharacter">
				<h4>CREATE NEW CHARACTER</h4>
			</CreateLink>
			<CardContainer className="Characters">{characterMap}</CardContainer>
		</Container>
	);
}

export default Characters;
