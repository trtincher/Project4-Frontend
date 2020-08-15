import React from 'react';

import UserForm from '../UserForm/UserForm';

function EditUser(props) {
	console.log('EditUser props', props);
	let edit = props.location.pathname;

	return (
		<div className="EditUser">
			<h1>Edit User Info</h1>
			<UserForm type={edit} props={props} />
		</div>
	);
}

export default EditUser;
