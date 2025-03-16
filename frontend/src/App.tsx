import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import SignInPage from "./components/sign-in";
import SignUpPage from "./components/sign-up";
import Home from "./components/Home";
import { GridBackgroundDemo } from "./components/ui/Background";

export default function App() {
  return (
    <Router>
      <div className="relative w-full min-h-screen items-center justify-center flex dark">
        <GridBackgroundDemo />
          <div className="absolute w-full min-h-screen max-w-[1280px] items-center justify-center flex z-0">
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


