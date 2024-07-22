import "./firebase";
import {createBrowserRouter} from "react-router-dom";
import App from "./App";
import Login from "./screens/beforeLogin/Login";
import Join from "./screens/beforeLogin/Join";
import HorseInfo from "./screens/horseInfo/HorseInfo";
import AboutHorse from "./components/horseInfo/AboutHorse";
import RacingPlan from "./screens/RacingPlan";
import RacingResult from "./components/racingResult/RacingResult";
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
      {path: "editUser/:id", element: <EditProfile />},
      {path: "racingPlan", element: <RacingPlan />},
      {path: "racingPlan/:id/:id", element: <RacingResult />},
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
