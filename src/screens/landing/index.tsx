import React, { useState } from "react";
import {
  ButtonContainer,
  LandingButton,
  LandingContainer,
  LandingTitle,
} from "./styles/landingStyles";
import path from "../../asset/images/yina.jpg";
import { useParams } from "react-router-dom";
import Resume from "../../components/resume";

export default function Landing() {
  const [selected, setSelected] = useState("");
  const param = useParams();
  return (
    <LandingContainer path={path}>
      <Resume
        introduction="我是誰 是誰 你是誰 你我他
      説你好
      丁丁"
      />
      {/* <LandingTitle>Test</LandingTitle>
      <ButtonContainer>
        {param.type === "advertorial" && (
          <LandingButton
            onMouseEnter={() => setSelected("collection")}
            onMouseOut={() => setSelected("")}
          >
            {selected === "collection" ? "Clik me" : "Collection"}
          </LandingButton>
        )}
        {param.type === "host" && (
          <LandingButton
            onMouseEnter={() => setSelected("主持")}
            onMouseOut={() => setSelected("")}
          >
            {selected === "主持" ? "Clik me" : "主持"}
          </LandingButton>
        )}
        {param.type === "actress" && (
          <LandingButton
            onMouseEnter={() => setSelected("演員")}
            onMouseOut={() => setSelected("")}
          >
            {selected === "演員" ? "Clik me" : "演員"}
          </LandingButton>
        )}
      </ButtonContainer> */}
    </LandingContainer>
  );
}
