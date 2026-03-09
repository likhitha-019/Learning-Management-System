import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import LoginPage from "./LoginPage";
import CoursesPage from "./CoursesPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={<LoginPage setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          path="/courses"
          element={isLoggedIn ? <CoursesPage /> : <Navigate to="/login" replace />}
        />
        <Route
          path="/"
          element={<Navigate to="/login" replace />}
        />
      </Routes>
    </Router>
  );
}

export default App;
