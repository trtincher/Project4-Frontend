import React, { useState, useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import styled from 'styled-components';

import DiceIcon from './Dice/DiceIcon';
import HpButtons from './HpCalc/HpButtons';
import HpDisplay from './HpDisplay/HpDisplay';
import HpCalc from './HpCalc/HpCalc';
import LongRest from './LongRest/LongRest';

const Container = styled.div`
	justify-content: space-around;
	padding: .5rem;
	position: fixed;
	bottom: 0;
	width: 100%;
`;

const Hp = styled.div`display: flex;`;

const RowOne = styled.div`
	display: flex;
	width: 100%;
`;
const RowTwo = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
`;

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
				<LongRest />
				<Hp>
					<HpDisplay />
					<HpButtons isPlus={isPlus} setIsPlus={setIsPlus} isMin={isMin} setIsMin={setIsMin} />
				</Hp>
			</RowTwo>
		</Container>
	);
}

export default DashFoot;
