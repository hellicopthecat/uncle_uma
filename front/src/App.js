import {createBrowserRouter} from "react-router-dom";
import "./App.css";
import Home from "./screens/Home";
import AboutHorse from "./components/horseInfo/AboutHorse";
import HorseInfo from "./screens/HorseInfo";
import RacingPlan from "./screens/RacingPlan";

const App = createBrowserRouter([
  {path: "/", element: <Home />},
  {path: "/horseDetail", element: <HorseInfo />},
  {path: "horseDetail/:id", element: <AboutHorse />},
  {path: "/racingPlan", element: <RacingPlan />},
]);

export default App;
