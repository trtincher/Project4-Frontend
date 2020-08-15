import React, { useState, useContext, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import apiURL from '../../apiConfig';
import axios from 'axios';
import { DataContext } from '../../App';
import CharacterForm from '../CharacterForm/CharacterForm';

function CreateCharacter(props) {
	const { activeUser, setActiveUser } = useContext(DataContext);
	const { activeCharacter, setActiveCharacter } = useContext(DataContext);
	const [ character, setCharacter ] = useState({});
	const [ id, setId ] = useState('');

	useEffect(
		() => {
			if (activeUser[0] !== undefined) {
				setId(activeUser[0]._id);
			}
		},
		[ activeUser ]
	);

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log('handleSubmit Clicked');
		const makeCharacter = async () => {
			try {
				//make character
				const res = await axios({
					url: `${apiURL}/characters`,
					method: 'POST',
					data: character
				});

				console.log('res in CreateCharacter', res);
				// push character into user characters array

				activeUser[0].characters.push(res.data);
				setActiveCharacter(res.data);
			} catch (err) {
				console.error(err);
			}
		};

		// update user in database
		const updateUser = async () => {
			try {
				const updated = await axios({
					url: `${apiURL}/users/${id}`,
					method: 'PUT',
					data: activeUser[0]
				});
				//set active use to updated user
				setActiveUser(updated.data);
				console.log(activeUser);
				//route back to characters

				props.history.push('/dashboard');
			} catch (err) {
				console.error(err);
			}
		};

		await makeCharacter();
		console.log('activeUser in updateUser', activeUser[0]);
		await updateUser();
	};

	const handleChange = (e) => {
		console.log(e.target.value);
		setCharacter({
			...character,
			[e.target.name]: e.target.value
		});
	};

	return (
		<div className="CreateCharacter">
			<h1>CreateCharacter</h1>
			<CharacterForm
				type="create"
				character={character}
				handleSubmit={handleSubmit}
				handleChange={handleChange}
				cancelPath="/dashboard"
			/>
		</div>
	);
}

export default CreateCharacter;
