import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login/index";
import User from "./pages/user/user";
import React, { useState, useContext, createContext } from "react";

function App() {
  const UserContext = createContext()
  const [userLogado, setUserLogado] = useState();

  return (
    <div className="App">
      <UserContext.Provider value={userLogado}>
        <Routes>
          <Route exact path="/" element={<LoginPage />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
