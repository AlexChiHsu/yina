import { createHashRouter } from "react-router-dom";
import App from "../../App";
import Landing from "../../screens/landing";
import Test from "../../screens/test";

export const router = createHashRouter(
  [
    {
      path: "/",
      element: <App />,
      errorElement: (
        <>
          <div>error</div>
        </>
      ),
      children: [
        {
          path: "/landing/:type",
          element: <Landing />,
        },
        {
          path: "/test",
          element: <Test />,
        },
      ],
    },
  ],
  { basename: "/" }
);
