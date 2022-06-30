import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login";
import User from "./pages/user";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<LoginPage />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
