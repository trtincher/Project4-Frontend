import React, { useState, useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import apiURL from '../../../apiConfig';
import axios from 'axios';

function DashBody() {
	return (
		<div className="DashBody">
			<h1>DashBody</h1>
		</div>
	);
}

export default DashBody;