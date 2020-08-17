import React, { useState, useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiceD20 } from '@fortawesome/free-solid-svg-icons';
import { DataContext } from '../../../../App';

const Icon = styled.div`
	border: 3px solid #f0fff0;
	background: steelblue;
	border-radius: 10px;
	padding: 14px;
	color: #f0fff0;
`;

const icon = <FontAwesomeIcon icon={faDiceD20} size="3x" />;

function DiceIcon() {
	const { setIsDice, isDice } = useContext(DataContext);

	return (
		<div className="DiceIcon">
			<Icon onClick={() => setIsDice(!isDice)}>{icon}</Icon>
		</div>
	);
}

export default DiceIcon;
