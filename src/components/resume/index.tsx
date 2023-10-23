import React, { useState } from "react";
import {
  ResumeContainer,
  ResumeContentContainer,
  ResumeContentTextContainer,
} from "./style/resumeStyles";
import Draggable from "react-draggable";

function Resume() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const handleDrag = (e: any, ui: any) => {
    const { x, y } = position;
    setPosition({
      x: x + ui.deltaX,
      y: y + ui.deltaY,
    });
  };
  return (
    <ResumeContainer>
      <ResumeContentContainer>
        <Draggable
          onDrag={handleDrag}
          position={{ x: position.x, y: position.y }}
        >
          <ResumeContentTextContainer>
            x: {position.x}, y: {position.y}
          </ResumeContentTextContainer>
        </Draggable>
      </ResumeContentContainer>
    </ResumeContainer>
  );
}

export default Resume;
