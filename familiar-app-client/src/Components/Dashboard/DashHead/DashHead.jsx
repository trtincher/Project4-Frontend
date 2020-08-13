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

const First = styled.div`display: flex;`;
const Secound = styled.div`display: flex;`;
const Third = styled.div`display: flex;`;
const Fourth = styled.div`display: flex;`;

function DashHead({ character }) {
	return (
		<StyledHead className="DashHead">
			<First>
				<Nav />
				<Avatar character={character} />
				<BattleButton />
			</First>
			<Secound>
				<BaseStats character={character} />
			</Secound>
			<Third>
				<SecoundaryStats />
			</Third>
			<Fourth>
				<SpellSlot />
			</Fourth>
		</StyledHead>
	);
}

export default DashHead;
