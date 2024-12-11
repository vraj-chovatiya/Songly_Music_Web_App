import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/home/HomePage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<div>Search Page</div>} />
        <Route path="/playlists" element={<div>Playlists Page</div>} />
        <Route path="/profile" element={<div>Profile Page</div>} />
      </Routes>
    </Router>
  );
}

export default App;
