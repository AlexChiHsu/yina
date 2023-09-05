import { createHashRouter } from "react-router-dom";
import App from "../../App";
import Landing from "../../screens/landing";

export const router = createHashRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <Landing />,
        },
      ],
    },
  ],
  { basename: "/" }
);
