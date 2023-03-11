import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Landing } from "./pages/Landing";
// import Login from "./pages/login/Login";
// import SignUp from "./pages/login/SignUp";



const App = () => {

  return (
    <div className="p-2 bg-blue-100 ">

      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/home' element={<Home />} />

        </Routes>
        <div className="bottom-0 rounded-lg text-center w-full bg-blue">

          {/* <Footer /> */}
        </div>
      </Router>

    </div>

  )
};

export default App;
