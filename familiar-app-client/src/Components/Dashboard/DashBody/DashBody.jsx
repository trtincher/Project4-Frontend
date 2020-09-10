import React, { useState, useContext, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import apiURL from "../../../apiConfig";
import axios from "axios";
import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { DataContext } from "../../../App";

import Decks from "./Decks/Decks";
import Hands from "./Hands/Hands";
import DamageCard from "./DamageCard/DamageCard";
import DescriptionCard from "./DescriptionCard";

const Container = styled.div`
  margin: 0;
`;

const BackButton = styled.button`
  right: 0;
  position: fixed;
  background: none;
  border: none;
  margin: 10px;
`;

const back = <FontAwesomeIcon icon={faChevronCircleLeft} size="5x" />;

function DashBody() {
  const {
    activeCharacter,
    setActiveCharacter,
    setIsHand,
    isHand,
    hand,
    setHand,
    prof,
    modifiers,
  } = useContext(DataContext);
  const [mod, setMod] = useState({});
  const [profBonus, setProfBonus] = useState({});

  useEffect(() => {
    if (modifiers !== undefined) {
      setMod(modifiers);
    }
    if (prof !== undefined) {
      setProfBonus(prof);
    }
  }, [modifiers, prof]);

  const HandleBackClick = () => {
    setIsHand(false);
    setHand("");
    window.scrollTo(0, 0);
  };

  return (
    <Container>
      {isHand && hand ? (
        <BackButton onClick={HandleBackClick}>{back}</BackButton>
      ) : null}
      <Decks />
      <Hands />
      <DamageCard profBonus={profBonus} mod={mod} />
      <DescriptionCard />
    </Container>
  );
}

export default DashBody;
