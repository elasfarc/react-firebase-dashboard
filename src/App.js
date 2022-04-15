import React from "react";
import Header from "./Header";
import "./App.css";
import "./firbase/config";
import Signup from "./pages/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <div className="app">
        <div className="ui grid container">
          <Routes>
            <Route exact path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
