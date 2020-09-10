import React, { useState, useContext, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import apiURL from "../../../apiConfig";
import axios from "axios";
import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGavel,
  faBookmark,
  faBook,
  faTools,
} from "@fortawesome/free-solid-svg-icons";
import { DataContext } from "../../../App";

import Decks from "./Decks/Decks";
import Hands from "./Hands/Hands";
import DamageCard from "./DamageCard/DamageCard";
import DescriptionCard from "./DescriptionCard";

const Container = styled.div`
  margin: 0;
`;

function DashBody() {
  const { modifiers, prof } = useContext(DataContext);
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

  return (
    <Container>
      <Decks />
      <Hands />
      <DamageCard profBonus={profBonus} mod={mod} />
      <DescriptionCard />
    </Container>
  );
}

export default DashBody;
