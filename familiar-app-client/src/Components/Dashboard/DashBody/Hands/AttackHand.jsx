import React, { useState, useContext, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import apiURL from '../../../../apiConfig';
import axios from 'axios';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGavel, faBookmark, faBook, faTools } from '@fortawesome/free-solid-svg-icons';
import { DataContext } from '../../../../App';

import CardContainer from '../../../Card/CardContainer';
import Card from '../../../Card/Card';

const Container = styled.div``;

const actionColor = '#FEE440';
const spellColor = '#9b5de5';
const equipmentColor = '#00f5d4';
const skillsColor = '#f15bb5';
const otherColor = '#00bbf9';

const gavel = <FontAwesomeIcon icon={faGavel} size="6x" />;
const bookmark = <FontAwesomeIcon icon={faBookmark} size="6x" />;
const book = <FontAwesomeIcon icon={faBook} size="6x" />;
const tools = <FontAwesomeIcon icon={faTools} size="6x" />;

function ActionHand() {
	const { activeCharacter, setActiveCharacter, setIsHand, isHand, hand, setHand, setIsPlayed, setActiveAction } = useContext(DataContext);
    const [ currentHand, setCurrentHand ] = useState([]);
    const [ attacks, setAttacks] = useState([])

	// console.log('activeCharacter in Action Hand', activeCharacter);
	// console.log('currentHand in Action', currentHand);

	useEffect(
		() => {
			// console.log('action hand useEffect');

			if (activeCharacter.actions !== undefined) {
                let a = nonSpellAttacks()
                // console.log('a', a)
                setAttacks(a)

                let h = makeHand();
                // console.log('h', h)
				setCurrentHand(h);
			}
		},
		[ activeCharacter ]
	);

	const handleActionClick = (action) => {
        setIsPlayed(true)
        setActiveAction(action)
	};

	const nonSpellAttacks = ()=>{
        activeCharacter.equipment.map((item)=>{
            if(item.equipment_category.name === 'Weapon' && item.equiped === true){
               if(attacks !== undefined){
                    setAttacks( [...attacks, item])
               }else{
                 setAttacks( [item])
               }
            }
        })
        // console.log('attacks in nonSpellAttacks', attacks)
    }

	const makeHand = () => {
        // console.log('attacks in makeHand', attacks)
        if(attacks !== undefined)
		{const curHand = attacks.map((item) => (
			<Card onClick={() => handleActionClick(item)} width="100px" height="180px" backgroundColor="#FEE440">
				<h4>{item.name}</h4>
                <p>{item.category_range}</p>
                <p>{item.damage.damage_dice}</p>
                <p>{item.damage.damage_type.name}</p>
			</Card>
		));
		curHand.push(
			<Card onClick={() => handleActionClick('Unarmed')} width="100px" height="180px" backgroundColor="#FEE440">
				<h4>Unarmed</h4>
			</Card>
		);
		return curHand;}
	};

	return (
        <>
			{isHand && hand === 'Attack' ? <h1>Attack</h1> : null}
			<CardContainer>{isHand && hand === 'Attack' ? currentHand : null}</CardContainer>
        </>
	);
}

export default ActionHand;
