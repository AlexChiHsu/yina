import React from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import Landing from "./screens/landing";

const AppContainer = styled.div`
  ${tw`
    w-full
    h-full
  `}
`;

function App() {
  return (
    <AppContainer>
      <Landing />
    </AppContainer>
  );
}

export default App;
