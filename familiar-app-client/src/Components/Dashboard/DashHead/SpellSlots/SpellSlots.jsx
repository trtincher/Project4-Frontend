import React, { useState, useContext, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagic } from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
	display: flex;
	flex-grow: 1;
	justify-content: space-between;
	min-height: 25px;
	border: 1px solid white;
	background: #00bbf9;
	border-radius: 10px;
`;

const SlotContainer = styled.div`display: flex;`;

const Slot = styled.div`
	border: 1px solid white;
	width: 2rem;
	margin: 3px 5px;
	border-radius: 10px;
`;

const Value = styled.h1`
	font-size: 2rem;
	margin: 0;
`;

const Icon = styled.div`
	padding: 5px;
	margin-left: 5px;
`;

const icon = <FontAwesomeIcon icon={faMagic} size="2x" />;

const SpellSlot = () => {
	return (
		<Container>
			<Icon>{icon}</Icon>
			<SlotContainer>
				<Slot>
					<Value>1</Value>
				</Slot>
				<Slot>
					<Value>1</Value>
				</Slot>
				<Slot>
					<Value>1</Value>
				</Slot>
				<Slot>
					<Value>2</Value>
				</Slot>
			</SlotContainer>
		</Container>
	);
};

export default SpellSlot;
