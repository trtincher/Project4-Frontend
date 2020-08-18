import React, { useState, useContext, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import apiURL from '../../../apiConfig';
import axios from 'axios';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGavel, faBookmark, faBook, faTools } from '@fortawesome/free-solid-svg-icons';
import { DataContext } from '../../../App';

import Decks from './Decks/Decks';
import Hands from './Hands/Hands';
import DamageCard from './DamageCard/DamageCard';
import DescriptionCard from './DescriptionCard';

const Container = styled.div`margin: 0;`;

function DashBody() {
	const {
		activeCharacter,
		setActiveCharacter,
		modifiers,
		prof,
		isBattle,
		activeAction,
		setActiveAction
	} = useContext(DataContext);
	const [ isHand, setIsHand ] = useState('');
	const [ hand, setHand ] = useState('');
	const [ isPlayed, setIsPlayed ] = useState(false);
	const [ mod, setMod ] = useState({});
	const [ profBonus, setProfBonus ] = useState({});
	const [ isDescription, setIsDescription ] = useState(false);

	useEffect(
		() => {
			if (modifiers !== undefined) {
				setMod(modifiers);
			}
			if (prof !== undefined) {
				setProfBonus(prof);
			}
		},
		[ modifiers, prof ]
	);

	return (
		<Container>
			<DataContext.Provider
				value={{
					setIsHand,
					isHand,
					hand,
					setHand,
					activeCharacter,
					setActiveCharacter,
					isPlayed,
					setIsPlayed,
					activeAction,
					setActiveAction,
					isBattle,
					prof,
					isDescription,
					setIsDescription
				}}
			>
				<Decks />
				<Hands />
				<DamageCard profBonus={profBonus} mod={mod} />
				<DescriptionCard />
			</DataContext.Provider>
		</Container>
	);
}

export default DashBody;
