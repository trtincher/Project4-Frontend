import React, { useState, useContext, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagic } from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
	display: flex;
	flex-grow: 1;
	justify-content: space-around;
	min-height: 25px;
	border: 1px solid white;
	background: #00bbf9;
	border-radius: 10px;
`;

const icon = <FontAwesomeIcon icon={faMagic} />;

const HpDisplay = () => {
	return <Container>{icon}</Container>;
};

export default HpDisplay;
