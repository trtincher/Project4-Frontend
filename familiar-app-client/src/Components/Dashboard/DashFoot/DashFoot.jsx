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
	const [ isPlus, setIsPlus ] = useState(false);
	const [ isMin, setIsMin ] = useState(false);

	return (
		<Container>
			<RowOne>
				<HpCalc isPlus={isPlus} isMin={isMin} />
			</RowOne>
			<RowTwo>
				<DiceIcon />
				<HpDisplay />
				<HpButtons isPlus={isPlus} setIsPlus={setIsPlus} isMin={isMin} setIsMin={setIsMin} />
			</RowTwo>
		</Container>
	);
}

export default DashFoot;
