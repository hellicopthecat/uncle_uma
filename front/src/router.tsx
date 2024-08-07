import "./firebase";
import {createBrowserRouter} from "react-router-dom";
import App from "./App";
import Login from "./screens/beforeLogin/Login";
import Join from "./screens/beforeLogin/Join";
import HorseInfo from "./screens/horseInfo/HorseInfo";
import AboutHorse from "./screens/horseDetail/AboutHorse";
import RacingPlan from "./screens/racingPlan/RacingPlan";
import RacingResult from "./screens/racingResult/RacingResult";
import DividendRate from "./screens/dividendRate/DividendRate";
import Board from "./screens/board/Board";
import ReadBoard from "./components/board/ReadBoard";
import WriteBoard from "./components/board/WriteBoard";
import EditProfile from "./screens/editProfile/EditProfile";

import ChatComp from "./components/chat/ChatComp";
import ErrorPage from "./components/main/ErrorPage";

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
      {path: "dividendRate", element: <DividendRate />},
      {path: "board", element: <Board />},
      {path: "board/:boardId", element: <ReadBoard />},
      {path: "board/write", element: <WriteBoard />},
      {path: "editUser/:uid", element: <EditProfile />},
      // {path: "chat", element: <ChatComp />},
      {path: "*", element: <ErrorPage />},
    ],
  },
]);

export default router;
