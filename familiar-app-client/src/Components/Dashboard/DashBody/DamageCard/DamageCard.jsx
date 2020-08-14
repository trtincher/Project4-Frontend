import React, { useState, useContext } from 'react';
import styled, { css } from 'styled-components';
import { DataContext } from '../../../../App';

import Card from '../../../Card/Card';
import CardContainer from '../../../Card/CardContainer';

const Container = styled.div`
	margin: 0;
	height: 1000px;
`;

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
	const { isPlayed, setIsPlayed } = useContext(DataContext);
	const [ isHand, setIsHand ] = useState('');
	const [ hand, setHand ] = useState('');

	const handConfirmClick = () => {
		console.log('confirm');
		setIsPlayed(false);
	};
	const handCancelClick = () => {
		console.log('Cancel');
		setIsPlayed(false);
	};

	const dCard = (
		<DCard>
			<h1>Damage</h1>
			<h3>Weapon</h3>
			<h4>Damage Amount: #</h4>
			<h4>Damage Type: Type</h4>
			<button onClick={handConfirmClick}>Confirm</button>
			<button onClick={handCancelClick}>Cancel</button>
		</DCard>
	);

	return <div>{isPlayed ? dCard : null}</div>;
}

export default DamageCard;
