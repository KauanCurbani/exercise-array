import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login/index";
import User from "./pages/user/user";

import React, { useState, useContext, createContext } from "react";
import MyContext from "./Context/context";
import Home from "./pages/homepage/home";

function App() {
  const [user, setUser] = useState('')
  return (
    <div className="App">
      <MyContext.Provider value={{user, setUser}}>
        <Routes>
          <Route exact path="/" element={<LoginPage />} />
          <Route path="/user" element={<User />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </MyContext.Provider>
    </div>
  );
}

export default App;
