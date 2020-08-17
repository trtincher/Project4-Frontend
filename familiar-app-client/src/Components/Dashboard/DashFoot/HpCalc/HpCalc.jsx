import React, { useState, useContext, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { DataContext } from '../../../../App';
import apiURL from '../../../../apiConfig';
import axios from 'axios';

const Container = styled.div`
	display: flex;
	justify-content: flex-end;
	width: 100%;
`;
const Unit = styled.div`
	border: 3px solid white;
	background: steelblue;
	border-radius: 10px;
	padding: 10px;
	width: 2rem;
	margin-right: 2rem;
	color: white;
	display: flex;
	justify-content: center;
	flex-direction: column;
`;

const InvisibleUnit = styled.div`
	padding: 10px;
	width: 2rem;
	margin-right: 2rem;
`;

const Value = styled.h3`
	font-size: 1rem;
	display: flex;
	margin: .5rem auto;
`;

function HpCalc({ isPlus, isMin }) {
	const { activeCharacter, setActiveCharacter } = useContext(DataContext);
	const [ currentRange, setCurrentRange ] = useState([]);
	const [ maxRange, setMaxRange ] = useState([]);

	useEffect(
		() => {
			if (activeCharacter.hp !== undefined) {
				let curr = calcCurrRange();
				let max = calcMaxRange();
				setCurrentRange(curr);
				setMaxRange(max);
			}
		},
		[ activeCharacter ]
	);

	const calcCurrRange = () => {
		const currentHp = activeCharacter.hp.current;
		const curr = [];
		for (let i = 1; i <= currentHp; i++) {
			curr.push(i);
		}
		const currMap = curr.map((n) => <p>{n}</p>);
		return currMap;
	};

	const calcMaxRange = () => {
		const maxHp = activeCharacter.hp.max + activeCharacter.hp.temp;
		const max = [];
		for (let i = 1; i <= maxHp; i++) {
			max.push(i);
		}
		const maxMap = max.map((n) => <p>{n}</p>);
		return maxMap;
	};

	const handleMinClick = async (num) => {
		// console.log('minclick');
		// console.log('activeCharacter.hp.current in handleMin', activeCharacter.hp.current);
		// console.log('num in handleMin', num);
		let newCurrentHp = parseInt(activeCharacter.hp.current) - parseInt(num);
		// console.log('newCurrentHp', newCurrentHp);
		let hpObj = {
			hp: {
				current: newCurrentHp,
				max: activeCharacter.hp.max,
				temp: activeCharacter.hp.temp
			}
		};

		try {
			let res = await axios({
				url: `${apiURL}/characters/${activeCharacter._id}`,
				method: 'PUT',
				data: hpObj
			});

			console.log('res in handleMin', res);
			setActiveCharacter(res.data);
		} catch (err) {
			console.error(err);
		}
	};

	const minValues = currentRange.map((number) => {
		console.log('number in minValues', number.props.children);
		// console.log('currentRange', currentRange);

		return <Value onClick={() => handleMinClick(number.props.children)}>-{number}</Value>;
	});

	return (
		<Container>
			{isPlus ? (
				<Unit>
					<Value>{maxRange}</Value>
				</Unit>
			) : (
				<InvisibleUnit />
			)}
			{isMin ? <Unit>{minValues}</Unit> : <InvisibleUnit />}
		</Container>
	);
}

export default HpCalc;
