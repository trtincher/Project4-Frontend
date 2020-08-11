import React from 'react';

import Form from '../Form/Form';

function Login(props) {
	console.log('Login props', props);
	let login = props.location.pathname;

	return (
		<div className="Login">
			<h1>Login</h1>
			<Form type={login} />
		</div>
	);
}

export default Login;
