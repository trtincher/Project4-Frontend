import React, { useState, useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import apiURL from '../../../../apiConfig';
import axios from 'axios';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGavel, faBookmark, faBook, faTools } from '@fortawesome/free-solid-svg-icons';
import { DataContext } from '../../../../App';

import CardContainer from '../../../Card/CardContainer';
import Card from '../../../Card/Card';

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
    const { activeCharacter, setActiveCharacter, setIsHand, isHand, hand, setHand } = useContext(DataContext);

    const HandleBackClick = ()=>{
        setIsHand(false)
        setHand('')
    }

    const currentHand = (
        <>
            <Card>Action</Card>
            <Card>Action</Card>
            <Card>Action</Card>
            <Card>Action</Card>
            <Card>Action</Card>
            <Card>Action</Card>
            <Card>Action</Card>
            <button onClick={HandleBackClick}>Back</button>
        </>
    )


	return <CardContainer>
        {isHand && hand==='Actions'? currentHand: null}
    </CardContainer>
}

export default ActionHand;
