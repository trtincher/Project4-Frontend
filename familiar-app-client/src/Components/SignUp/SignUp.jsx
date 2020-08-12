import React from 'react';

import UserForm from '../UserForm/UserForm';

function SignUp(props) {
	let signup = props.location.pathname;
	console.log('SignUp props', props);

	return (
		<div className="SignUp">
			<h1>SignUp</h1>
			<UserForm type={signup} props={props} />
		</div>
	);
}

export default SignUp;
