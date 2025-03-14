
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import SignInPage from "./components/sign-in";
import SignUpPage from "./components/sign-up";
import Home from "./components/Home";

export default function App() {
  return (
    <Router>
      <div className="bg-zinc-900 w-full min-h-screen">
      <div className=" flex flex-col  max-w-[1280px] mx-auto">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage/>}/>
          <Route path="/dashboard" element={<Dashboard/>}></Route>
        </Routes>
      </div>
      </div>
      
    </Router>
  );
}

