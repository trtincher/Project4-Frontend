import React, { useState, useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';

import StyledHead from './StyledHead';
import Avatar from './Avatar/Avatar';
import BattleButton from './Battle/BattleButton';
import BaseStats from './Stats/BaseStats';

function DashHead({ character }) {
	return (
		<StyledHead className="DashHead">
			<Avatar character={character} />
			<BattleButton />
			<BaseStats character={character} />
		</StyledHead>
	);
}

export default DashHead;
