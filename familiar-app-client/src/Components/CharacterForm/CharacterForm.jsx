import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { DataContext } from '../../App';

const FormContainer = styled.div``;

const Form = styled.form``;

const Input = styled.input``;

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

				<Input type="submit" />
				<Link to={cancelPath}>
					<button>Cancel</button>
				</Link>
			</Form>
		</FormContainer>
	);
}

export default CharacterForm;
