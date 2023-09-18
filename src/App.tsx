import styled from "styled-components";
import tw from "twin.macro";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";

const AppContainer = styled.div`
  ${tw`
    w-full
    h-full
  `}
`;

function App() {
  useEffect(() => {
    (window as any).fbAsyncInit = function () {
      FB.init({
        // this FB errors out
        appId: "6896601727027597",
        autoLogAppEvents: true,
        xfbml: true,
        version: "v18.0",
      });
    };

    (function (d: any, s: any, id: any) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  }, []);
  return (
    <AppContainer>
      <Outlet />
    </AppContainer>
  );
}

export default App;

// Instagram 應用程式編號 812850980586595
// Instagram 應用程式密鑰 151e2e8418633ab4dd07dbef996013d1
