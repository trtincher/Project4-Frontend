import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import apiURL from '../../apiConfig';
import axios from 'axios';
import { DataContext } from '../../App';

function StudentForm({ type }) {
	console.log('StudentForm type', type);
	const [ user, setUser ] = useState({});
	const { activeUser, setActiveUser } = useContext(DataContext);

	const handleChange = (e) => {
		// console.log('field', e.target.value);
		setUser({
			...user,
			[e.target.name]: e.target.value
		});
	};

	const handleLoginSubmit = (event) => {
		event.preventDefault();
		console.log('handleLoginSubmit');
	};

	const handleSignUpSubmit = (event) => {
		event.preventDefault();
		console.log('handleSignUpSubmit');
		axios({
			url: `${apiURL}/users`,
			method: 'POST',
			data: user
		})
			.then((res) => {
				console.log('res in Signup', res);
				setActiveUser(res.data);
			})
			.catch(console.error);
	};

	let submitType = type === '/login' ? handleLoginSubmit : handleSignUpSubmit;

	return (
		<div className="StudentForm">
			<form onSubmit={submitType}>
				<input placeholder={'Name'} value={user.name} name="name" onChange={handleChange} />

				<input placeholder={`email`} value={user.email} name="email" onChange={handleChange} />

				<input placeholder={`password`} value={user.password} name="password" onChange={handleChange} />

				<button type="submit">Submit</button>
				<Link to="/">
					<button>Cancel</button>
				</Link>
			</form>
		</div>
	);
}

export default StudentForm;
