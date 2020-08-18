import React, { useState, useContext, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import apiURL from '../../../../apiConfig';
import axios from 'axios';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { DataContext } from '../../../../App';

import CardContainer from '../../../Card/CardContainer';
import Card from '../../../Card/Card';

const actionColor = '#FEE440';
const spellColor = '#9b5de5';
const equipmentColor = '#00f5d4';
const skillsColor = '#f15bb5';
const otherColor = '#00bbf9';

const check = <FontAwesomeIcon icon={faCheckCircle} size="3x" />;

const Container = styled.div`
	width: 100%;
	min-height: 100vh;
`;

const Prof = styled.h1`
	font-size: 1.5rem;
	text-align: right;
`;
const Header = styled.h1`
	font-size: 1.1rem;
	margin-top: 2rem;
`;
const Sub = styled.h1`
	font-size: .7rem;
	margin-top: .5rem;
`;

const DCard = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-even;
	background: steelblue;
	border: 2px solid white;
	border-radius: 10px;
	width: 180px;
	height: 260px;
	margin: 15px 30%;
	padding: 1rem;
	position: absolute;
	top: 300px;
`;

const DHeader = styled.h1`
	font-size: 2rem;
	margin-top: 2rem;
	margin-bottom: 1rem;
`;

const Button = styled.button`
	background: none;
	border: none;
	margin-top: 3rem;
`;

function SkillsHand() {
	const { activeCharacter, setActiveCharacter, setIsHand, isHand, hand, setHand, prof } = useContext(DataContext);
	const [ currHand, setCurrHand ] = useState([]);
	const [ isPlayed, setIsPlayed ] = useState(false);
	const [ playedCard, setPlayedCard ] = useState({});
	const [ damage, setDamage ] = useState({});

	useEffect(
		() => {
			if (activeCharacter.proficiencies !== undefined) {
				let profs = activeCharacter.proficiencies.skill_prof;
				let c = currentHand(profs);
				setCurrHand(c);
			}
		},
		[ activeCharacter, prof ]
	);

	const HandleBackClick = () => {
		setIsHand(false);
		setHand('');
	};

	const skills = {
		acrobatics: {
			name: 'Acrobatics',
			mod: 'dex',
			prof: false
		},
		animalHandling: {
			name: 'Animal Handling',
			mod: 'wis',
			prof: false
		},
		arcana: {
			name: 'Arcana',
			mod: 'int',
			prof: false
		},
		athletics: {
			name: 'Athletics',
			mod: 'str',
			prof: false
		},
		deception: {
			name: 'Deception',
			mod: 'cha',
			prof: false
		},
		history: {
			name: 'History',
			mod: 'int',
			prof: false
		},
		insight: {
			name: 'Insight',
			mod: 'wis',
			prof: false
		},
		intimidation: {
			name: 'Intimidation',
			mod: 'int',
			prof: false
		},
		medicine: {
			name: 'Medicine',
			mod: 'wis',
			prof: false
		},
		nature: {
			name: 'Nature',
			mod: 'mod',
			prof: false
		},
		perception: {
			name: 'Perception',
			mod: 'wis',
			prof: false
		},
		persuasion: {
			name: 'Persuasion',
			mod: 'cha',
			prof: false
		},
		religion: {
			name: 'Religion',
			mod: 'int',
			prof: false
		},
		sleightOfHand: {
			name: 'Sleight of Hand',
			mod: 'dex',
			prof: false
		},
		stealth: {
			name: 'stealth',
			mod: 'dex',
			prof: false
		},
		survival: {
			name: 'wis',
			mod: 'mod',
			prof: false
		}
	};

	const currentHand = (profs) => {
		const output = [];
		for (const [ key, value ] of Object.entries(skills)) {
			profs.forEach((prof) => {
				if (value.name.toLowerCase() === prof) {
					value.prof = true;
				}
			});

			output.push(
				<Card width="100px" height="180px" backgroundColor="coral" onClick={() => handleCardClick(value)}>
					{value.prof ? <Prof>P</Prof> : <Prof />}
					<Header>{value.name}</Header>
					<Sub>{value.mod}</Sub>
				</Card>
			);
		}
		return output;
	};

	const handleCardClick = (value) => {
		setIsPlayed(!isPlayed);
		setPlayedCard(value);
		let d = rollDamage(value);
		setDamage(d);
	};

	const rollDamage = (value) => {
		let damage = {};

		//loop for amount of dice
		for (let i = 1; i <= 1; i++) {
			//roll dice type
			let roll = Math.floor(Math.random() * (20 - 1) + 1);

			damage['roll'] = roll;
		}

		//Add modifiers proficiency bonus + intelligence modifier

		damage['proficency'] = prof;

		console.log('value in rolldamage', value);

		if (value.prof) {
			damage['result'] = damage.roll + damage.proficency;
		} else {
			damage['result'] = damage.roll;
		}

		return damage;
	};

	let dCard = (
		<DCard>
			<DHeader>{playedCard.name}</DHeader>
			{playedCard.prof ? (
				<p>
					D20: {damage.roll} + {damage.proficency} =
				</p>
			) : (
				<p>D20: {damage.roll} =</p>
			)}
			<h2>{damage.result}</h2>

			<Button onClick={() => setIsPlayed(!isPlayed)}>{check}</Button>
		</DCard>
	);

	return (
		<Container>
			<CardContainer>{isHand && hand === 'Skills' ? currHand : null}</CardContainer>
			{isPlayed ? dCard : null}
		</Container>
	);
}

export default SkillsHand;
