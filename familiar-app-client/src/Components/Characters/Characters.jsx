import React, { useState, useContext } from 'react';
import { DataContext } from '../../App';

function Characters(props) {
	const { activeUser, setActiveUser } = useContext(DataContext);
	const { activeCharacter, setActiveCharacter } = useContext(DataContext);

	console.log('activeUser in Characters', activeUser);
	console.log('props in Characters', props);

	const handleCharacterClick = (character) => {
		setActiveCharacter(character);
		props.history.push('/dashboard');
	};

	const characters = activeUser[0].characters;

	const characterMap = characters.map((character) => (
		<div key={character.id}>
			<h3>{character.name}</h3>
			<h5>{character.race}</h5>
			<h4>{character.class}</h4>
			<h5>{`Level: ${character.level}`}</h5>
			<button onClick={() => handleCharacterClick(character)}>Select Character</button>
		</div>
	));

	return (
		<div className="Characters">
			<h1>{`${activeUser[0].name} Select Your Character`}</h1>
			<div>{characterMap}</div>
			<button>CREATE NEW CHARACTER</button>
		</div>
	);
}

export default Characters;
