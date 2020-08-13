import React, { useState, useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiceD20 } from '@fortawesome/free-solid-svg-icons';

const Icon = styled.div`
	border: 1px solid white;
	background: #00bbf9;
	border-radius: 10px;
	padding: 10px;
`;

const icon = <FontAwesomeIcon icon={faDiceD20} size="3x" />;

function DiceIcon() {
	return (
		<div className="DiceIcon">
			<Icon>{icon}</Icon>
		</div>
	);
}

export default DiceIcon;
