import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import About from "./Components/About";


function App() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="w-full max-w-315 mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;