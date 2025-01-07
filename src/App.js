import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { HashRouter as Router, Route, Routes } from "react-router-dom"; // שימוש ב-HashRouter
import Navbar from "./components/Navbar";
import "./index.css";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Files from "./pages/Files";
import { verifyToken } from "./redux/authSlice";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      dispatch(verifyToken());
    }
    console.log("User state:", user); // לוגים לבדיקת מצב המשתמש
    console.log("Environment:", process.env.NODE_ENV); // לוגים לבדיקת הסביבה
  }, [dispatch, user]); // הוספת תלות ב-user

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow bg-gray-100">
          <div className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/files" element={<Files />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </main>
        <footer className="bg-gray-800 text-white py-8">
          <div className="max-w-7xl mx-auto text-center">
            <p>&copy; 2025 LCAI. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
