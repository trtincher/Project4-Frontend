import React, { useState, useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import styled, { css } from 'styled-components';

import StyledHead from './StyledHead';
import Avatar from './Avatar/Avatar';
import BattleButton from './Battle/BattleButton';
import BaseStats from './Stats/BaseStats';
import SpellSlot from './SpellSlots/SpellSlots';
import SecoundaryStats from './Stats/SecoundaryStats';
import Nav from '../../Nav/Nav';
import Conditions from './Conditions/Conditions';
import Defences from './Defences/Defences';
import BattleMode from './Battle/BattleMode';

const First = styled.div`
	display: flex;
	justify-content: flex-end;
`;
const Secound = styled.div`display: flex;`;
const Third = styled.div`
	display: flex;
	justify-content: center;
`;
const Fourth = styled.div`display: flex;`;

function DashHead({ character }) {
	return (
		<StyledHead>
			<First>
				<Avatar character={character} />
				<BattleButton />
			</First>
			<Secound>
				<BaseStats character={character} />
			</Secound>
			<Third>
				<SecoundaryStats />
				<Defences />
				<Conditions />
			</Third>
			<Fourth>
				<SpellSlot />
			</Fourth>
			<BattleMode />
		</StyledHead>
	);
}

export default DashHead;
