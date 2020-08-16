import React, { useState, useContext, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { DataContext } from '../../../../App';
import axios from 'axios';
import apiURL from '../../../../apiConfig';

const DCard = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-even;
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

const Button = styled.button`
	border: none;
	background: none;
`;

const H4 = styled.h4`margin: 1rem 0;`;

function DamageCard() {
	const { isPlayed, setIsPlayed, activeAction, setActiveAction, activeCharacter, setActiveCharacter } = useContext(
		DataContext
	);
	const [ damage, setDamage ] = useState('');

	useEffect(
		() => {
			if (activeAction.damage !== undefined) {
				let d = setDCard();
				setDamage(d);
			}
		},
		[ activeAction ]
	);

	const handConfirmClick = async () => {
		console.log('confirm');
		setIsPlayed(false);
		//if spell is not a cantrip
		if (activeAction.level !== 0) {
			let slots = activeCharacter.spellSlots;
			console.log('slots', slots);
			slots[activeAction.level] -= 1;
			console.log('slots', slots);

			try {
				const res = await axios({
					url: `${apiURL}/characters/${activeCharacter._id}`,
					method: 'PUT',
					data: { spellSlots: slots }
				});
				console.log('res in DamageCard', res);
				setActiveCharacter(res.data);
			} catch (err) {
				console.error(err);
			}
		}
	};
	const handCancelClick = () => {
		console.log('Cancel');
		setIsPlayed(false);
	};

	const setDCard = () => {
		const dCard = (
			<DCard>
				<h1>Damage</h1>
				<h3>{activeAction.name}</h3>
				<H4>Damage Amount: {activeAction.damage.damage_dice}</H4>
				<H4>Damage Type: {activeAction.damage.damage_type.name}</H4>
				<Button onClick={handConfirmClick}>
					<h2>Confirm</h2>
				</Button>
				<Button onClick={handCancelClick}>
					<h2>Cancel</h2>
				</Button>
			</DCard>
		);
		return dCard;
	};

	return <div>{isPlayed ? damage : null}</div>;
}

export default DamageCard;
