import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import apiURL from '../../apiConfig';
import axios from 'axios';
import { DataContext } from '../../App';

function UserForm({ type, props }) {
	// console.log('UserForm type', type);
	// console.log('UserForm', props);
	const { activeUser, setActiveUser } = useContext(DataContext);
	const [ user, setUser ] = useState({});
	const [ invalidEntry, setInvalidEntry ] = useState('');
	const [ name, setName ] = useState('');
	const [ password, setPassword ] = useState('**********');
	const [ email, setEmail ] = useState('');
	const [ id, setId ] = useState('');

	console.log('activeUser in UserForm', activeUser);
	console.log('type in UserForm', type);

	useEffect(
		() => {
			if (activeUser[0] !== undefined) {
				setName(activeUser[0].name);
				setEmail(activeUser[0].email);
				setId(activeUser[0]._id);
			}
		},
		[ activeUser ]
	);

	const handleChange = (e) => {
		console.log('field', e.target.name, e.target.value);
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

	const handleEditSubmit = async (event) => {
		event.preventDefault();
		console.log('handleEditSubmit');
		console.log('user', user);
		console.log('id', id);
		try {
			const res = await axios({
				url: `${apiURL}/users/${id}`,
				method: 'PUT',
				data: user
			});
			console.log('res in EditSubmit', res);
			setActiveUser(res.data);
			props.history.push('/dashboard');
		} catch (err) {
			console.error(err);
		}
	};

	let submitType = handleLoginSubmit;
	if (type === '/signup') submitType = handleSignUpSubmit;
	if (type === '/editUser') submitType = handleEditSubmit;

	return (
		<div className="UserForm">
			<h1>{invalidEntry}</h1>
			<form onSubmit={submitType}>
				<input
					placeholder={type === '/editUser' ? name : 'name'}
					value={user.name}
					name="name"
					onChange={handleChange}
				/>

				<input
					placeholder={type === '/editUser' ? email : 'email'}
					value={user.email}
					name="email"
					onChange={handleChange}
				/>

				<input
					placeholder={type === '/editUser' ? password : 'password'}
					value={user.password}
					name="password"
					onChange={handleChange}
				/>

				<button type="submit">Submit</button>
				<Link to="/">
					<button>Cancel</button>
				</Link>
			</form>
		</div>
	);
}

export default UserForm;
