import React, { useState, useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import apiURL from '../../../apiConfig';
import axios from 'axios';

function DashHead() {
	return (
		<div className="DashHead">
			<h1>DashHead</h1>
		</div>
	);
}

export default DashHead;
