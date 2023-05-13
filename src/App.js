import React from "react";
import "./App.css";
import HomeScreen from "./Screens/HomeScreen";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LoginScreen from "./Screens/LoginScreen";

function App() {
  const user = null;
  return (
    <div className="app">
      <Router>
        {user ? (
          <LoginScreen />
        ) : (
          <Routes>
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
