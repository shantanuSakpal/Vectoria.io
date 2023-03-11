import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Home } from "./pages/Home";
import { Landing } from "./pages/Landing";
import UploadPage from "./pages/Upload";
// import Login from "./pages/login/Login";
// import SignUp from "./pages/login/SignUp";



const App = () => {

  return (


    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/home' element={<Home />} />
        <Route path='/upload' element={<UploadPage />} />

      </Routes>

    </Router>



  )
};

export default App;
