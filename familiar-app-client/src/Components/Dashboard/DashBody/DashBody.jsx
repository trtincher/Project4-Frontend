import React, { useState, useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import apiURL from '../../../apiConfig';
import axios from 'axios';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGavel, faBookmark, faBook, faTools } from '@fortawesome/free-solid-svg-icons';
import { DataContext } from '../../../App';

import CardContainer from '../../Card/CardContainer';
import Card from '../../Card/Card';

const Container = styled.div`
	margin: 0;
	height: 1000px;
`;

const actionColor = '#FEE440';
const spellColor = '#9b5de5';
const equipmentColor = '#00f5d4';
const skillsColor = '#f15bb5';
const otherColor = '#00bbf9';

const gavel = <FontAwesomeIcon icon={faGavel} size="6x" />;
const bookmark = <FontAwesomeIcon icon={faBookmark} size="6x" />;
const book = <FontAwesomeIcon icon={faBook} size="6x" />;
const tools = <FontAwesomeIcon icon={faTools} size="6x" />;

function DashBody() {
	const { activeCharacter, setActiveCharacter } = useContext(DataContext);

	return (
		<Container>
			<CardContainer>
				<Card backgroundColor={actionColor}>
					<h2>Actions</h2>
					{gavel}
				</Card>
				<Card backgroundColor={spellColor}>
					<h2>Spells</h2>
					{book}
				</Card>
				<Card backgroundColor={equipmentColor}>
					<h2>Equipment</h2>
					{tools}
				</Card>
				<Card backgroundColor={skillsColor}>
					<h2>Skills</h2>
					{bookmark}
				</Card>
				<Card backgroundColor={otherColor}>
					<h2>Features & Traits</h2>
				</Card>
				<Card backgroundColor={otherColor}>
					<h2>Character Description</h2>
				</Card>
				<Card backgroundColor={otherColor}>
					<h2>Proficiencies & Languages</h2>
				</Card>
				<Card backgroundColor={otherColor}>
					<h2>Senses</h2>
				</Card>
				<Card backgroundColor={otherColor}>
					<h2>Saving Throws</h2>
				</Card>
				<Card backgroundColor={otherColor}>
					<h2>Defenses</h2>
				</Card>
				<Card backgroundColor={otherColor}>
					<h2>Conditions</h2>
				</Card>
			</CardContainer>
		</Container>
	);
}

export default DashBody;
