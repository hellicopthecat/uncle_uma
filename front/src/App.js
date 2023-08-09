import {createBrowserRouter} from "react-router-dom";
import "./App.css";
import "./firebase";
import Root from "./screens/Root";
import AboutHorse from "./components/horseInfo/AboutHorse";
import HorseInfo from "./screens/HorseInfo";
import RacingPlan from "./screens/RacingPlan";
import RacingResult from "./components/racingResult/RacingResult";
import JoinComp from "./components/main/JoinComp";
import LoginComp from "./components/main/LoginComp";
import EditProfile from "./components/main/EditProfile";
import ErrorPage from "./components/main/ErrorPage";
import Board from "./screens/Board";
import WriteBoard from "./components/board/WriteBoard";
import ReadBoard from "./components/board/ReadBoard";
import DividendRate from "./components/dividendRate/DividendRate";

const App = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {path: "join", element: <JoinComp />},
      {path: "login", element: <LoginComp />},
      {path: "editUser/:id", element: <EditProfile />},
      {path: "horseDetail", element: <HorseInfo />},
      {path: "horseDetail/:id", element: <AboutHorse />},
      {path: "racingPlan", element: <RacingPlan />},
      {path: "racingPlan/:id/:id", element: <RacingResult />},
      {path: "board", element: <Board />},
      {path: "board/:id", element: <ReadBoard />},
      {path: "board/write", element: <WriteBoard />},
      {path: "dividendRate", element: <DividendRate />},
      {path: "*", element: <ErrorPage />},
    ],
  },
]);

export default App;
