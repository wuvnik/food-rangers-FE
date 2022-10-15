import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";


import logo from './logo.svg';
import './App.css';
import User from "./pages/User";
import Landing from "./pages/Landing";
import Provider from "./pages/Provider";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <User />} />
        <Route path="/landing" element={ <Landing />} />
        <Route path="/provider" element={ <Provider />} />
      </Routes>
    </Router>
  );
}

export default App;
