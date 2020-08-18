import React, { useState, useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import apiURL from '../../../../apiConfig';
import axios from 'axios';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGavel, faBookmark, faBook, faTools } from '@fortawesome/free-solid-svg-icons';
import { DataContext } from '../../../../App';

import CardContainer from '../../../Card/CardContainer';
import Card from '../../../Card/Card';

const Header = styled.h2`
	margin-top: 2rem;
`

const Image = styled.div`margin-bottom: 2rem`

const actionColor = '#ffc857';
const spellColor = '#dbbbf5';
const equipmentColor = '#40f99b';
const skillsColor = '#f58a07';
const otherColor = '#55d6be';

const gavel = <FontAwesomeIcon icon={faGavel} size="6x" />;
const bookmark = <FontAwesomeIcon icon={faBookmark} size="6x" />;
const book = <FontAwesomeIcon icon={faBook} size="6x" />;
const tools = <FontAwesomeIcon icon={faTools} size="6x" />;

function Decks() {
	const { activeCharacter, setActiveCharacter, setIsHand, setHand, isHand } = useContext(DataContext);

	const handleDeckClick = (text) => {
		setHand(text);
		setIsHand(true);
    };
    
    const decks =(
        <>
			<Card 
				backgroundColor={actionColor} 
				onClick={() => handleDeckClick('Actions')} 		
				display="flex"
				justifyContent="center"
				alignItems="center"
				flexDirection="column" >
				<Header>Actions</Header>
				<Image>{gavel}</Image>
			</Card>
			<Card backgroundColor={spellColor} onClick={() => handleDeckClick('Spells')}
			display="flex"
			justifyContent="center"
			alignItems="center"
			flexDirection="column">
				<Header>Spells</Header>
				<Image>{book}</Image>
			</Card>
			<Card backgroundColor={equipmentColor} onClick={() => handleDeckClick('Equipment')}
			display="flex"
			justifyContent="center"
			alignItems="center"
			flexDirection="column">
				<Header>Equipment</Header>
				<Image>{tools}</Image>
			</Card>
			<Card backgroundColor={skillsColor} onClick={() => handleDeckClick('Skills')}
			display="flex"
			justifyContent="center"
			alignItems="center"
			flexDirection="column">
				<Header>Skills</Header>
				<Image>{bookmark}</Image>
			</Card>
			<Card backgroundColor={otherColor}>
				<Header>Features & Traits</Header>
			</Card>
			<Card backgroundColor={otherColor}>
				<Header>Character Description</Header>
			</Card>
			<Card backgroundColor={otherColor}>
				<Header>Proficiencies & Languages</Header>
			</Card>
			<Card backgroundColor={otherColor}>
				<Header>Senses</Header>
			</Card>
			<Card backgroundColor={otherColor}>
				<Header>Saving Throws</Header>
			</Card>
			<Card backgroundColor={otherColor}>
				<Header>Defenses</Header>
			</Card>
			<Card backgroundColor={otherColor}>
				<Header>Conditions</Header>
			</Card>
        </>
    )

	return (
		<CardContainer>
			{isHand? null: decks}
		</CardContainer>
	);
}

export default Decks;
