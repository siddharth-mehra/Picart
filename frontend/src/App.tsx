import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import SignInPage from "./components/sign-in";
import SignUpPage from "./components/sign-up";
import Home from "./components/Home";


export default function App() {
  return (
    <Router>
      <div className=" relative w-full">  
        <Navbar/>
          <div className="flex items-center justify-center min-h-screen ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
          </div>
      </div>
    </Router>
  );
}


