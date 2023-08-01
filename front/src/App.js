import {createBrowserRouter} from "react-router-dom";
import "./App.css";
import Home from "./screens/Home";
import AboutHorse from "./components/horseInfo/AboutHorse";
import HorseInfo from "./screens/HorseInfo";

const App = createBrowserRouter([
  {path: "/", element: <Home />},
  {path: "/horseDetail", element: <HorseInfo />},
  {path: "/horseDetail/:id", element: <AboutHorse />},
]);

export default App;
