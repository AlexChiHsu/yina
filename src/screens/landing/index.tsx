import React, { useState } from "react";
import {
  ButtonContainer,
  LandingButton,
  LandingContainer,
  LandingTitle,
} from "./styles/landingStyles";
import path from "../../asset/images/yina.jpg";

export default function Landing() {
  const [selected, setSelected] = useState("");
  return (
    <LandingContainer path={path}>
      <LandingTitle>顏以娜 Amy</LandingTitle>
      <ButtonContainer>
        <LandingButton
          onMouseEnter={() => setSelected("collection")}
          onMouseOut={() => setSelected("")}
        >
          {selected === "collection" ? "Clik me" : "Collection"}
        </LandingButton>
        <LandingButton
          onMouseEnter={() => setSelected("主持")}
          onMouseOut={() => setSelected("")}
        >
          {selected === "主持" ? "Clik me" : "主持"}
        </LandingButton>
        <LandingButton
          onMouseEnter={() => setSelected("演員")}
          onMouseOut={() => setSelected("")}
        >
          {selected === "演員" ? "Clik me" : "演員"}
        </LandingButton>
      </ButtonContainer>
    </LandingContainer>
  );
}
