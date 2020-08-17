import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import apiURL from '../../apiConfig';
import axios from 'axios';
import { DataContext } from '../../App';
import styled, { css } from 'styled-components';

const UserFormContainer = styled.div`
	width: 300px;
	margin: 1rem auto;
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
`;

const FormInput = styled.input`
	margin: .5rem 0;
	text-size: 1rem;
	height: 2rem;
	border: none;
	border-radius: 5px;
`;

const FormButton = styled.button`
	margin: 1rem 0;
	padding: 0;
	color: white;
	font-size: 1.5rem;
	background: lightsteelblue;
	border: none;
	border-radius: 5px;
`;

const FormLink = styled(Link)`
	text-decoration: none;
	color: white;
	background: none;
	box-shadow: none;

`;

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

	// console.log('activeUser in UserForm', activeUser);
	// console.log('type in UserForm', type);

	useEffect(() => {
		if (activeUser[0] !== undefined) {
			setName(activeUser[0].name);
			setEmail(activeUser[0].email);
			setId(activeUser[0]._id);
		}
	}, []);

	const handleChange = (e) => {
		// console.log('field', e.target.name, e.target.value);
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
				// console.log('Response getUser', response);
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
		// console.log('handleEditSubmit');
		// console.log('user', user);
		// console.log('id', id);
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
		<UserFormContainer>
			<h1>{invalidEntry}</h1>
			<Form onSubmit={submitType}>
				<FormInput
					placeholder={type === '/editUser' ? name : 'name'}
					value={user.name}
					name="name"
					onChange={handleChange}
				/>

				<FormInput
					placeholder={type === '/editUser' ? email : 'email'}
					value={user.email}
					name="email"
					onChange={handleChange}
				/>

				<FormInput
					placeholder={type === '/editUser' ? password : 'password'}
					value={user.password}
					name="password"
					onChange={handleChange}
				/>

				<FormButton type="submit">
					<h3>Submit</h3>
				</FormButton>
				<FormButton>
					<FormLink to="/">
						<h3>Cancel</h3>
					</FormLink>
				</FormButton>
			</Form>
		</UserFormContainer>
	);
}

export default UserForm;
