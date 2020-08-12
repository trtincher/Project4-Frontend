import React from 'react';

import UserForm from '../UserForm/UserForm';

function Login(props) {
	console.log('Login props', props);
	let login = props.location.pathname;

	return (
		<div className="Login">
			<h1>Login</h1>
			<UserForm type={login} />
		</div>
	);
}

export default Login;
