import {createBrowserRouter} from "react-router-dom";
import "./App.css";
import Home from "./screens/Home";
import AboutHorse from "./components/aboutHorse/AboutHorse";

const App = createBrowserRouter([
  {path: "/", element: <Home />},
  {path: "/horseDetail/:id", element: <AboutHorse />},
]);

export default App;
