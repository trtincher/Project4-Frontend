import React, { useState, useContext } from 'react';
import styled, { css } from 'styled-components';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGavel } from '@fortawesome/free-solid-svg-icons';

const BtlButton = styled.div`
	border: 1px solid white;
	background: #00bbf9;
	border-radius: 10px;
	width: 70px;
`;

const Heading = styled.p`
	font-size: 1rem;
	padding: 0;
	margin: 0;
`;

const Icon = styled.div``;

const icon = <FontAwesomeIcon icon={faGavel} size="3x" />;

function BattleButton({ character }) {
	return (
		<BtlButton>
			<Heading>Battle</Heading>
			<Icon>{icon}</Icon>
		</BtlButton>
	);
}

export default BattleButton;
