import React from 'react';
import styled, { css } from 'styled-components';

import UserForm from '../UserForm/UserForm';

const Container = styled.div`
	background: steelblue;
	height: 100vh;
	padding-top: 8rem;
	color: white;
`;

function SignUp(props) {
	let signup = props.location.pathname;
	// console.log('SignUp props', props);

	return (
		<Container>
			<h1>SignUp</h1>
			<UserForm type={signup} props={props} />
		</Container>
	);
}

export default SignUp;
