import React, { useState, useContext, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import apiURL from '../../../../apiConfig';
import axios from 'axios';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { DataContext } from '../../../../App';

import CardContainer from '../../../Card/CardContainer';
import ActionHand from './ActionHand';
import SpellsHand from './SpellsHand';
import SkillsHand from './SkillsHand';
import EquipmentHand from './EquipmentHand';

const back = <FontAwesomeIcon icon={faChevronCircleLeft} size="5x" />;

const BackButton = styled.button`
	right: 0;
	position: fixed;
	background: none;
	border: none;
	margin: 10px;
`;

function Hands() {
	const { activeCharacter, setActiveCharacter, setIsHand, isHand, hand, setHand, prof } = useContext(DataContext);
	const [ currentProf, setCurrentProf] = useState(0)

	useEffect(()=>{
		setCurrentProf(prof)
	}, [prof])

	const HandleBackClick = () => {
		setIsHand(false);
		setHand('');
	};

	const hands = (
		<>
			<ActionHand />
			<SpellsHand />
			<SkillsHand prof={currentProf}/>
			<EquipmentHand />
		</>
	)

	return (
		<CardContainer>
			{isHand && hand ? <BackButton onClick={HandleBackClick}>{back}</BackButton> : null}
			{hands}
		</CardContainer>
	);
}

export default Hands;
