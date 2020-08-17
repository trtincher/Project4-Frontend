import React from 'react';
import styled, { css } from 'styled-components';

import UserForm from '../UserForm/UserForm';

const Container = styled.div`
	background: steelblue;
	height: 100vh;
	padding-top: 8rem;
	color: white;
`;

function Login(props) {
	console.log('Login props', props);
	let login = props.location.pathname;

	return (
		<Container>
			<h1>Login</h1>
			<UserForm type={login} props={props} />
		</Container>
	);
}

export default Login;
