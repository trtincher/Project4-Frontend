import React, { useState, useContext, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import apiURL from '../../../../apiConfig';
import axios from 'axios';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGavel, faBookmark, faBook, faTools } from '@fortawesome/free-solid-svg-icons';
import { DataContext } from '../../../../App';

import CardContainer from '../../../Card/CardContainer';
import Card from '../../../Card/Card';

import AttackHand from './AttackHand';

const Container = styled.div``;

const actionColor = '#FEE440';
const spellColor = '#9b5de5';
const equipmentColor = '#00f5d4';
const skillsColor = '#f15bb5';
const otherColor = '#00bbf9';

const gavel = <FontAwesomeIcon icon={faGavel} size="6x" />;
const bookmark = <FontAwesomeIcon icon={faBookmark} size="6x" />;
const book = <FontAwesomeIcon icon={faBook} size="6x" />;
const tools = <FontAwesomeIcon icon={faTools} size="6x" />;

function ActionHand() {
	const { activeCharacter, setActiveCharacter, setIsHand, isHand, hand, setHand } = useContext(DataContext);
	const [ currentHand, setCurrentHand ] = useState([]);

	// console.log('activeCharacter in Action Hand', activeCharacter);
	// console.log('currentHand in Action', currentHand);

	useEffect(
		() => {
			// console.log('action hand useEffect');

			if (activeCharacter.actions !== undefined) {
				let h = makeHand();
				setCurrentHand(h);
			}
		},
		[ activeCharacter ]
	);

	const handleActionClick = (action) => {
		setHand(action);
	};

	const makeHand = () => {
		const curHand = activeCharacter.actions.map((action) => (
			<Card onClick={() => handleActionClick(action)} width="100px" height="180px" backgroundColor="#FEE440">
				<h3>{action}</h3>
			</Card>
		));
		return curHand;
	};

	const HandleBackClick = () => {
		setIsHand(false);
		setHand('');
	};

	return (
		<Container>
			{isHand && hand === 'Actions' ? <h1>Actions</h1> : null}
			<CardContainer>
				{isHand && hand === 'Actions' ? currentHand : null}
				<AttackHand />
			</CardContainer>
		</Container>
	);
}

export default ActionHand;
