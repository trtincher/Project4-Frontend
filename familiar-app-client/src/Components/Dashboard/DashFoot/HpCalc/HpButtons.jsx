import React, { useState, useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { faHeartBroken } from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
	display: flex;
	width: 100%;
	margin-right: 25px;
`;
const Unit = styled.div`
	display: flex;
	align-items: center;
	border: 3px solid white;
	background: steelblue;
	border-radius: 10px;
	padding: 10px;
	margin-left: 5px;
	color: white;
`;

const PlusIcon = styled.div``;
const SolidHeartIcon = styled.div``;
const MinusIcon = styled.div``;
const BrokenHeartIcon = styled.div``;

const plus = <FontAwesomeIcon icon={faPlus} size="2x" />;
const minus = <FontAwesomeIcon icon={faMinus} size="2x" />;
const solidHeart = <FontAwesomeIcon icon={faHeart} size="2x" />;
const brokenHeart = <FontAwesomeIcon icon={faHeartBroken} size="2x" />;

function HpButtons({ isPlus, setIsPlus, isMin, setIsMin }) {
	const handlePlusClick = () => {
		setIsPlus(!isPlus);
	};

	const handleMinClick = () => {
		setIsMin(!isMin);
	};

	return (
		<Container>
			<Unit onClick={handlePlusClick}>
				<PlusIcon>{plus}</PlusIcon>
				<SolidHeartIcon>{solidHeart}</SolidHeartIcon>
			</Unit>
			<Unit onClick={handleMinClick}>
				<MinusIcon>{minus}</MinusIcon>
				<BrokenHeartIcon>{brokenHeart}</BrokenHeartIcon>
			</Unit>
		</Container>
	);
}

export default HpButtons;
