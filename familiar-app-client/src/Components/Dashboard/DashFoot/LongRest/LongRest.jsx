import React, { useState, useContext } from 'react';
import styled, { css } from 'styled-components';
import { DataContext } from '../../../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGavel } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import apiURL from '../../../../apiConfig';

const RestContainer = styled.div`
	display: flex;

	background: steelblue;
	border-radius: 10px;
	width: 100%;
	padding: 0;
	color: mintcream;
`;

const Heading = styled.h1`
	font-size: 1rem;
	padding: 0;
	margin: 0;
`;

const Button = styled.button`
	background: none;
	border: 1px solid mintcream;
	color: mintcream;
	border-radius: 5px;
	margin: 0 5px;
`;

const icon = <FontAwesomeIcon icon={faGavel} size="2x" />;

function LongRest() {
	const { activeCharacter, setActiveCharacter } = useContext(DataContext);

	let handleLongRest = async () => {
		console.log('LongRest');
		//reset spell slots
		//for first level wizard
		let slots = activeCharacter.spellSlots;
		slots[1] = 2;
		//update DB with new slots

		try {
			const res = await axios({
				url: `${apiURL}/characters/${activeCharacter._id}`,
				method: 'PUT',
				data: { spellSlots: slots }
			});
			console.log('res in DamageCard', res);
			//setActiveCharacter to res.data
			setActiveCharacter(res.data);
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<RestContainer>
			<Heading>Rest</Heading>
			<Button onClick={handleLongRest}>
				<Heading>Long</Heading>
			</Button>
			<Button>
				<Heading>Short</Heading>
			</Button>
		</RestContainer>
	);
}

export default LongRest;
