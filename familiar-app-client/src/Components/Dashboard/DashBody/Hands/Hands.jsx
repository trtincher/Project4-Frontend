import React, { useState, useContext, useEffect } from "react";
import styled, { css } from "styled-components";
import { DataContext } from "../../../../App";

import CardContainer from "../../../Card/CardContainer";
import ActionHand from "./ActionHand";
import SpellsHand from "./SpellsHand";
import SkillsHand from "./SkillsHand";
import EquipmentHand from "./EquipmentHand";

function Hands() {
  const {
    activeCharacter,
    setActiveCharacter,
    setIsHand,
    isHand,
    hand,
    setHand,
    prof,
  } = useContext(DataContext);
  const [currentProf, setCurrentProf] = useState(0);

  useEffect(() => {
    setCurrentProf(prof);
  }, [prof]);

  const hands = (
    <>
      <ActionHand />
      <SpellsHand />
      <SkillsHand prof={currentProf} />
      <EquipmentHand />
    </>
  );

  return <CardContainer>{hands}</CardContainer>;
}

export default Hands;
