import React, { useState, useContext, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { DataContext } from '../../../../App';

const DCard = styled.div`
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

function DamageCard() {
	const { isPlayed, setIsPlayed, activeAction, setActiveAction } = useContext(DataContext);
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

	const handConfirmClick = () => {
		console.log('confirm');
		setIsPlayed(false);
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
				<h4>Damage Amount: {activeAction.damage.damage_dice}</h4>
				<h4>Damage Type: {activeAction.damage.damage_type.name}</h4>
				<button onClick={handConfirmClick}>Confirm</button>
				<button onClick={handCancelClick}>Cancel</button>
			</DCard>
		);
		return dCard;
	};

	return <div>{isPlayed ? damage : null}</div>;
}

export default DamageCard;
