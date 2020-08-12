import React, { useState, useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import apiURL from '../../apiConfig';
import axios from 'axios';
import { DataContext } from '../../App';

import DashHead from './DashHead/DashHead';
import DashBody from './DashBody/DashBody';
import DashFoot from './DashFoot/DashFoot';

function Dashboard() {
	const { activeUser, setActiveUser } = useContext(DataContext);
	const { activeCharacter, setActiveCharacter } = useContext(DataContext);

	return (
		<div className="Dashboard">
			<DashHead character={activeCharacter} />
			<DashBody character={activeCharacter} />
			<DashFoot character={activeCharacter} />
		</div>
	);
}

export default Dashboard;
