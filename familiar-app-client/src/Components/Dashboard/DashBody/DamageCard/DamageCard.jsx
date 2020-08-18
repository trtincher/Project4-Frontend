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
	padding: 1rem;
	position: fixed;
	top: 40%;
	left: 50%;
	margin-left: -110px;
	z-index: 100;
`;

const Button = styled.button`
	border: none;
	background: none;
`;

const H4 = styled.h4``;

function DamageCard({ profBonus, mod }) {
	const { isPlayed, setIsPlayed, activeAction, setActiveAction, activeCharacter, setActiveCharacter } = useContext(
		DataContext
	);
	const [ damageCard, setDamageCard ] = useState('');

	useEffect(
		() => {
			if (activeAction.damage !== undefined) {
				let d = setDCard();
				setDamageCard(d);
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

	const setDamageDice = () => {
		let damageDice = '';
		if (activeAction.components !== undefined && activeAction.level > 0) {
			//hardcoded for 1st level spell
			damageDice = activeAction.damage.damage_at_slot_level[1];
		}
		if (activeAction.components !== undefined && activeAction.level === 0) {
			damageDice = activeAction.damage.damage_at_character_level[activeCharacter.level];
		}
		console.log('damageDice', damageDice);
		return damageDice;
	};

	const rollDamage = () => {
		let damage = [];
		//setDamageDice gives me the dice to roll
		let dice = setDamageDice();
		//Produce a random number from the range given by dice
		let diceArr = dice.split('');
		let diceAmount = diceArr[0];
		let diceType = diceArr[2];

		//loop for amount of dice
		for (let i = 1; i <= diceAmount; i++) {
			//roll dice type
			let roll = Math.floor(Math.random() * (diceType - 1) + 1);
			console.log('roll', roll);
			damage.push(roll);
		}

		//Add modifiers proficiency bonus + intelligence modifier

		return damage;
	};

	const setDCard = () => {
		let damageDice = setDamageDice();
		let damageRoll = rollDamage();
		console.log('damagRoll', damageRoll);

		let rollSum = damageRoll.reduce((a, c) => a + c, 0);
		let damageSum = parseInt(rollSum) + parseInt(profBonus) + parseInt(mod.intelligence);

		const dCard = (
			<DCard>
				<h1>Damage</h1>
				<h3>{activeAction.name}</h3>
				<p>{`${damageDice} : ${damageRoll} +${profBonus}+${mod.intelligence}=`}</p>
				<h1>
					{damageSum} {activeAction.damage.damage_type.name}
				</h1>
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

	return <div>{isPlayed ? damageCard : null}</div>;
}

export default DamageCard;
