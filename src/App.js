import React from "react";
import Header from "./Header";
import "./App.css";
import "./firbase/config";
import Signup from "./pages/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "./firbase/userProvider";
import Profile from "./pages/Profile";
import Signin from "./pages/Signin";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Header></Header>
        <div className="app">
          <div className="ui grid container">
            <Routes>
              <Route exact path="/signup" element={<Signup />} />
              <Route exact path="/profile/:id" element={<Profile />} />
              <Route exact path="/signin" element={<Signin />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
