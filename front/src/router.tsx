import "./firebase";
import {createBrowserRouter} from "react-router-dom";
import App from "./App";
import Login from "./screens/beforeLogin/Login";
import Join from "./screens/beforeLogin/Join";
import HorseInfo from "./screens/horseInfo/HorseInfo";
import AboutHorse from "./screens/horseDetail/AboutHorse";
import RacingPlan from "./screens/racingPlan/RacingPlan";
import RacingResult from "./screens/racingResult/RacingResult";

import EditProfile from "./components/main/EditProfile";
import ErrorPage from "./components/main/ErrorPage";
import Board from "./screens/Board";
import WriteBoard from "./components/board/WriteBoard";
import ReadBoard from "./components/board/ReadBoard";
import DividendRate from "./components/dividendRate/DividendRate";
import ChatComp from "./components/chat/ChatComp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {path: "/", element: <App />},
      {path: "login", element: <Login />},
      {path: "join", element: <Join />},
      {path: "horseInfo", element: <HorseInfo />},
      {path: "horseInfo/:id", element: <AboutHorse />},
      {path: "racingPlan", element: <RacingPlan />},
      {path: "racingPlan/:rcDate/:rcNo", element: <RacingResult />},
      {path: "editUser/:id", element: <EditProfile />},
      {path: "board", element: <Board />},
      {path: "board/:id", element: <ReadBoard />},
      {path: "board/write", element: <WriteBoard />},
      {path: "dividendRate", element: <DividendRate />},
      {path: "chat", element: <ChatComp />},
      {path: "*", element: <ErrorPage />},
    ],
  },
]);

export default router;
