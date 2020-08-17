import React, { useState, useContext, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiceD20 } from '@fortawesome/free-solid-svg-icons';
import { DataContext } from '../../App';

const DCard = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-even;
	background: steelblue;
	border: 2px solid white;
	border-radius: 10px;
	width: 180px;
	height: 260px;
	margin: 15px 30%;
	padding: 1rem;
	position: absolute;
	top: 300px;
`;

const Container = styled.div``;

const Button = styled.button`
    border: 1px solid mintcream;
    border-radius: 10px;
    background: none;
    margin: .2rem;
    
`;

const icon = <FontAwesomeIcon icon={faDiceD20} size="3x" />;

function DiceIcon() {
	const { isDice, setIsDice } = useContext(DataContext);
	const [ diceCard, setDiceCard ] = useState(false);

	useEffect(
		() => {
			let d = makeDiceCard();
            setDiceCard(d);
			
		},
		[ isDice ]
	);

	const makeDiceCard = () => {
		return (
			<DCard>
                
				<Button><h1>D20</h1></Button>
				<Button><h1>D12</h1></Button>
				<Button><h1>D10</h1></Button>
				<Button><h1>D100</h1></Button>
				<Button><h1>D8</h1></Button>
				<Button><h1>D6</h1></Button>
				<Button><h1>D4</h1></Button>
			</DCard>
		);
	};

	return <>{isDice? diceCard: null}</>;
}

export default DiceIcon;
