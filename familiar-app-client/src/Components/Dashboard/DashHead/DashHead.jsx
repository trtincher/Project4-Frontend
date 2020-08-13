import React, { useState, useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';

import StyledHead from './StyledHead';
import Avatar from './Avatar/Avatar';
import BattleButton from './Battle/BattleButton';
import BaseStats from './Stats/BaseStats';
import HpDisplay from './HpDisplay/HpDisplay';
import SpellSlot from './SpellSlots/SpellSlots';

function DashHead({ character }) {
	return (
		<StyledHead className="DashHead">
			<Avatar character={character} />
			<BattleButton />
			<BaseStats character={character} />
			<HpDisplay />
			<SpellSlot />
		</StyledHead>
	);
}

export default DashHead;