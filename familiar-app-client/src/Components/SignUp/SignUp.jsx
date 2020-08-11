import React from 'react';

import Form from '../Form/Form';

function SignUp(props) {
	let signup = props.location.pathname;

	return (
		<div className="SignUp">
			<h1>SignUp</h1>
			<Form type={signup} />
		</div>
	);
}

export default SignUp;
