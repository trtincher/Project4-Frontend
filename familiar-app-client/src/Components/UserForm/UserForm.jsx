import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import apiURL from '../../apiConfig';
import axios from 'axios';
import { DataContext } from '../../App';

function UserForm({ type, props }) {
	// console.log('UserForm type', type);
	// console.log('UserForm', props);
	const { setActiveUser } = useContext(DataContext);
	const [ user, setUser ] = useState({});
	const [ invalidEntry, setInvalidEntry ] = useState('');

	const handleChange = (e) => {
		// console.log('field', e.target.value);
		setUser({
			...user,
			[e.target.name]: e.target.value
		});
	};

	const handleLoginSubmit = (event) => {
		event.preventDefault();
		// console.log('handleLoginSubmit');
		const getUser = async () => {
			try {
				const response = await axios(`${apiURL}/users/email/${user.email}`);
				console.log('Response getUser', response);
				if (response.data.length > 0) {
					setActiveUser(response.data);
					props.history.push('/characters');
				} else {
					setInvalidEntry('Invalid Credentials');
				}
			} catch (err) {
				console.error(err);
			}
		};
		getUser();
	};

	const handleSignUpSubmit = (event) => {
		event.preventDefault();
		// console.log('handleSignUpSubmit');
		axios({
			url: `${apiURL}/users`,
			method: 'POST',
			data: user
		})
			.then((res) => {
				console.log('res in Signup', res);
				setActiveUser(res.data);
				props.history.push('/characters');
			})
			.catch(console.error);
	};

	let submitType = type === '/login' ? handleLoginSubmit : handleSignUpSubmit;

	return (
		<div className="UserForm">
			<h1>{invalidEntry}</h1>
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

export default UserForm;
