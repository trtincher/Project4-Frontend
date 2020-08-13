import React, { useState, useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import styled from 'styled-components';

import DiceIcon from './Dice/DiceIcon';
import HpButtons from './HpCalc/HpButtons';
import HpDisplay from './HpDisplay/HpDisplay';
import HpCalc from './HpCalc/HpCalc';

const Container = styled.div`
	justify-content: space-around;
	padding: .5rem;
	position: fixed;
	bottom: 0;
`;

const RowOne = styled.div`display: flex;`;
const RowTwo = styled.div`display: flex;`;

function DashFoot() {
	return (
		<Container>
			<RowOne>
				<HpCalc />
			</RowOne>
			<RowTwo>
				<DiceIcon />
				<HpDisplay />
				<HpButtons />
			</RowTwo>
		</Container>
	);
}

export default DashFoot;
