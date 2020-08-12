import React, { useState, useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import apiURL from '../../apiConfig';
import axios from 'axios';
import { DataContext } from '../../App';

function Dashboard() {
	const { activeUser, setActiveUser } = useContext(DataContext);

	return (
		<div className="Dashboard">
			<h1>Dashboard</h1>
		</div>
	);
}

export default Dashboard;
