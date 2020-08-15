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
	padding: .5rem;
`;

const Heading = styled.h1`
	font-size: 1rem;
	padding: 0;
	margin: 0;
`;

const Icon = styled.div``;

const icon = <FontAwesomeIcon icon={faGavel} size="2x" />;

function BattleButton({ character }) {
	return (
		<BtlButton>
			<Heading>Battle</Heading>
			<Icon>{icon}</Icon>
		</BtlButton>
	);
}

export default BattleButton;
