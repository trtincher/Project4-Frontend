import React, { useState, useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import apiURL from "../../../../apiConfig";
import axios from "axios";
import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGavel,
  faBookmark,
  faBook,
  faTools,
} from "@fortawesome/free-solid-svg-icons";
import { DataContext } from "../../../../App";

import CardContainer from "../../../Card/CardContainer";
import Card from "../../../Card/Card";

const actionColor = "#FEE440";
const spellColor = "#9b5de5";
const equipmentColor = "#00f5d4";
const skillsColor = "#f15bb5";
const otherColor = "#00bbf9";

const gavel = <FontAwesomeIcon icon={faGavel} size="6x" />;
const bookmark = <FontAwesomeIcon icon={faBookmark} size="6x" />;
const book = <FontAwesomeIcon icon={faBook} size="6x" />;
const tools = <FontAwesomeIcon icon={faTools} size="6x" />;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
`;

function EquipmentHand() {
  const {
    activeCharacter,
    setActiveCharacter,
    setIsHand,
    isHand,
    hand,
    setHand,
  } = useContext(DataContext);

  const currentHand = (
    <>
      <Card>Equipment</Card>
      <Card>Equipment</Card>
      <Card>Equipment</Card>
      <Card>Equipment</Card>
      <Card>Equipment</Card>
      <Card>Equipment</Card>
      <Card>Equipment</Card>
    </>
  );

  return <>{isHand && hand === "Equipment" ? currentHand : null}</>;
}

export default EquipmentHand;
