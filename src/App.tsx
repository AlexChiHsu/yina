import styled from "styled-components";
import tw from "twin.macro";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { fetchSheet } from "./api/get";
import { useAppDispatch, useAppSelector } from "./app/hooks";

const AppContainer = styled.div`
  ${tw`
    w-full
    h-full
  `}
`;

function App() {
  const dispatch = useAppDispatch();
  const sheet = useAppSelector((state) => state.sheetReducer.sheet);
  useEffect(() => {
    dispatch(fetchSheet());
  }, [dispatch]);

  console.log(JSON.stringify(sheet));
  return (
    <AppContainer>
      <Outlet />
    </AppContainer>
  );
}

export default App;

// Instagram 應用程式編號 812850980586595
// Instagram 應用程式密鑰 151e2e8418633ab4dd07dbef996013d1
