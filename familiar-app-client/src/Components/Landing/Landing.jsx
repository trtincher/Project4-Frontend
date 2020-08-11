import React from 'react';
import { Link } from 'react-router-dom';

import Nav from '../Nav/Nav';

function Landing() {
	return (
		<div className="Landing">
			<Nav />
			<h1>Landing</h1>
			<Link to="/login">Login</Link>
			<Link to="/signup">Sign Up</Link>
		</div>
	);
}

export default Landing;
