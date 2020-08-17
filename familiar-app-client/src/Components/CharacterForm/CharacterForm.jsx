import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { DataContext } from '../../App';

const FormContainer = styled.div`min-height: 100vh;`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
	width: 60%;
	margin: auto;
`;

const Input = styled.input`
	margin: 1rem;
	height: 2rem;
	font-size: 1.5rem;
	border-radius: 5px;
	border: none;
`;

const Button = styled.button`
	width: 93%;
	font-size: 1.5rem;
	height: 2rem;
	border-radius: 5px;
	margin: 1rem auto;
	border: none;
`;

function CharacterForm({ character, handleSubmit, handleChange, cancelPath }) {
	const { activeUser, setActiveUser, activeCharacter, setActiveCharacter } = useContext(DataContext);

	return (
		<FormContainer>
			<Form onSubmit={handleSubmit}>
				<Input placeholder={'name'} value={character.name} name="name" onChange={handleChange} />

				<Input placeholder={`class`} value={character.class} name="class" onChange={handleChange} />

				<Input placeholder={`gender`} value={character.gender} name="gender" onChange={handleChange} />

				<Input placeholder={`race`} value={character.race} name="race" onChange={handleChange} />

				<Input placeholder={`level`} value={character.level} name="level" onChange={handleChange} />

				<Input
					placeholder={`proficiencies`}
					value={character.proficiencies}
					name="proficiencies"
					onChange={handleChange}
				/>

				<Input placeholder={`languages`} value={character.languages} name="languages" onChange={handleChange} />

				<Input type="submit" />
				<Link to={cancelPath}>
					<Button>Cancel</Button>
				</Link>
			</Form>
		</FormContainer>
	);
}

export default CharacterForm;
