import React, { useState, useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import styled, { css } from 'styled-components';

const AvatarContainer = styled.div`
	background: #00bbf9;
	display: flex;
	justify-content: flex-end;
	flex-grow: 2;
	border: 1px solid white;
	border-radius: 10px;
	padding-right: 3rem;
`;

const Lvl = styled.div`
	display: flex;
	justify-content: center;
	background: white;
	align-items: center;
	border-radius: 50%;
	width: 25px;
	height: 25px;
	font-size: 10px;
	margin-top: .5rem;
`;

const AvatarImg = styled.img`
	backround: blue;
	position: relative;
	width: 70px;
	height: 70px;
	clip-path: circle(30px at center);
`;

const HeadContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

const SubContainer = styled.div`display: flex;`;

const Header = styled.h1`
	font-size: 1rem;
	padding: 0;
	margin: 0;
`;

const SubHeader = styled.h2`
	font-size: 1rem;
	padding: 0;
	margin: .5rem;
`;

function Avatar({ character }) {
	// console.log('character in Avatar', character);
	// console.log('avatar in Avatar', character.avatar);
	return (
		<AvatarContainer className="Avatar">
			<Lvl>{`Lvl ${character.level}`}</Lvl>
			<AvatarImg src={character.avatar} alt="character img" />
			<HeadContainer>
				<Header>{character.name}</Header>

				<SubContainer>
					<SubHeader>{character.class}</SubHeader>
					<SubHeader>{character.race}</SubHeader>
				</SubContainer>
			</HeadContainer>
		</AvatarContainer>
	);
}

export default Avatar;
