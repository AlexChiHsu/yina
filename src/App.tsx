import React, { useEffect } from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const AppContainer = styled.div`
  ${tw`
    w-full
    h-full
  `}
`;

function App() {
  return (
    <AppContainer>
      <Outlet />
    </AppContainer>
  );
}

export default App;
