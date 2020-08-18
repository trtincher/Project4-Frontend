import React, { useState, useContext, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { DataContext } from '../../../App';
import axios from 'axios';
import apiURL from '../../../apiConfig';

const DCard = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-even;
	background: #55d6be;
	border: 2px solid white;
	border-radius: 10px;
	width: 300px;
	height: 260px;
	padding: 1rem;
	position: fixed;
	top: 40%;
	left: 50%;
	margin-left: -160px;
	z-index: 100;
	overflow-x: hidden;
	overflow-y: auto;
`;

const Button = styled.button`
	border: none;
	background: none;
	position: fixed;
	top: 40%;
	left: 50%;
	margin-left: -150px;
	z-index: 200;
`;

const Header = styled.h1`
	font-size: 2rem;
	margin: .3rem 0;
`;
const Sub1 = styled.h2`
	font-size: 1.5rem;
	margin: .3rem 0;
`;
const Sub2 = styled.h3`
	font-size: 1.2rem;
	margin: .3rem 0;
`;

const Text = styled.p``;

function DescriptionCard() {
	const {
		isPlayed,
		setIsPlayed,
		activeAction,
		setActiveAction,
		activeCharacter,
		setActiveCharacter,
		isDescription,
		setIsDescription
	} = useContext(DataContext);
	const [ descriptionCard, setDescriptionCard ] = useState('');

	useEffect(
		() => {
			if (activeAction.damage !== undefined) {
				let d = setDCard();
				setDescriptionCard(d);
			}
		},
		[ activeAction ]
	);
	const handCancelClick = () => {
		console.log('Exit');
		setIsDescription(false);
	};

	const setDCard = () => {
		const dCard = (
			<DCard>
				<Header>Discription</Header>
				<Sub1>{activeAction.name}</Sub1>
				<Text>{activeAction.desc}</Text>
				<Sub2>School</Sub2>
				<Text> {activeAction.school.name}</Text>
				<Sub2>Components</Sub2>
				<Text> {activeAction.components}</Text>
				<Sub2>Damage Type</Sub2>
				<Text> {activeAction.damage.damage_type.name}</Text>
				<Sub2>Attack Type</Sub2>
				<Text> {activeAction.attack_type}</Text>
				<Sub2>Range</Sub2>
				<Text> {activeAction.range}</Text>
				<Sub2>Ritual</Sub2>
				<Text> {activeAction.ritual ? 'yes' : 'no'}</Text>
				<Sub2>Duration</Sub2>
				<Text> {activeAction.duration}</Text>
				<Sub2>Concentration</Sub2>
				<Text> {activeAction.concentration ? 'yes' : 'no'}</Text>
				<Sub2>Casting Time</Sub2>
				<Text> {activeAction.casting_time}</Text>
				<Button onClick={handCancelClick}>
					<h2>Exit</h2>
				</Button>
			</DCard>
		);
		return dCard;
	};

	return <div>{isDescription ? descriptionCard : null}</div>;
}

export default DescriptionCard;
