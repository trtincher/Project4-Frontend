import React, { useState, useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import styled from 'styled-components';

import DiceIcon from './Dice/DiceIcon';
import HpCalc from './HpCalc/HpCalc';
import HpDisplay from './HpDisplay/HpDisplay';

const Container = styled.div`
	display: flex;
	justify-content: space-around;
	padding: .5rem;
	position: fixed;
	bottum: 0;
`;

function DashFoot() {
	return (
		<Container>
			<DiceIcon />
			<HpDisplay />
			<HpCalc />
		</Container>
	);
}

export default DashFoot;
