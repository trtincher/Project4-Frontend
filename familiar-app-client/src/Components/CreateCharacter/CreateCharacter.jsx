import React, { useState, useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import apiURL from '../../apiConfig';
import axios from 'axios';
import { DataContext } from '../../App';
import CharacterForm from '../CharacterForm/CharacterForm';

function CreateCharacter() {
	const { activeUser, setActiveUser } = useContext(DataContext);
	const { activeCharacter, setActiveCharacter } = useContext(DataContext);

	return (
		<div className="CreateCharacter">
			<h1>CreateCharacter</h1>
			<CharacterForm />
		</div>
	);
}

export default CreateCharacter;
