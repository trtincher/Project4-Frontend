import React from 'react';

import UserForm from '../UserForm/UserForm';

function SignUp(props) {
	let signup = props.location.pathname;

	return (
		<div className="SignUp">
			<h1>SignUp</h1>
			<UserForm type={signup} />
		</div>
	);
}

export default SignUp;
