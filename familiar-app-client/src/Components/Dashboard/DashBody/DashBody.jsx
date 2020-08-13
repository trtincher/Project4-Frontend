import React, { useState, useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import apiURL from '../../../apiConfig';
import axios from 'axios';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGavel } from '@fortawesome/free-solid-svg-icons';

import CardContainer from '../../Card/CardContainer';
import Card from '../../Card/Card';

const Container = styled.div`
	margin: 0;
	height: 1000px;
`;

function DashBody() {
	return (
		<Container>
			<CardContainer>
				<Card>Text</Card>
				<Card>Text</Card>
				<Card>Text</Card>
				<Card>Text</Card>
				<Card>Text</Card>
			</CardContainer>
		</Container>
	);
}

export default DashBody;
