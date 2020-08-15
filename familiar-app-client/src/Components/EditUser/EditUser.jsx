import React, { useContext, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import axios from 'axios';
import apiURL from '../../apiConfig';
import { DataContext } from '../../App';

import UserForm from '../UserForm/UserForm';
import UserContainer from '../UserStyle/UserContainer';

const DeleteButton = styled.button`
	margin: .5rem 0;
	background: #9b5de5;
	padding: 0;
	width: 300px;
	margin: .5rem auto;
`;

const FormLink = styled(Link)`
	text-decoration: none;
	color: black;
`;

const DeleteCard = styled.div`
	background: red;
	border: 2px solid white;
	border-radius: 10px;
	width: 180px;
	height: 260px;
	margin: 15px 30%;
	padding: 1rem;
	position: absolute;
	top: 300px;
`;

function EditUser(props) {
	const { activeUser, setActiveUser } = useContext(DataContext);
	const [ id, setId ] = useState('');
	const [ isDeleted, setIsDeleted ] = useState(false);

	useEffect(
		() => {
			if (activeUser[0] !== undefined) {
				setId(activeUser[0]._id);
			}
		},
		[ activeUser ]
	);

	console.log('EditUser props', props);
	let edit = props.location.pathname;

	const handleDeleteClick = async () => {
		try {
			const res = axios({
				url: `${apiURL}/users/${id}`,
				method: 'DELETE'
			});
		} catch (err) {
			console.error(err);
		}

		console.log('Delect res', res);
		setIsDeleted(true);
	};

	const deleteCard = (
		<DeleteCard>
			<h1>{activeUser.name} has been Deleted</h1>
		</DeleteCard>
	);

	return (
		<UserContainer>
			<h1>Edit User Info</h1>
			<UserForm type={edit} props={props} />
			<DeleteButton onClick={handleDeleteClick}>
				<FormLink to="/">
					<h3>Delete Account</h3>
				</FormLink>
			</DeleteButton>
			{isDeleted ? deleteCard : null}
		</UserContainer>
	);
}

export default EditUser;
