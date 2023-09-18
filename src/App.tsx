import styled from "styled-components";
import tw from "twin.macro";
import { Outlet } from "react-router-dom";

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

// Instagram 應用程式編號 812850980586595
// Instagram 應用程式密鑰 151e2e8418633ab4dd07dbef996013d1
