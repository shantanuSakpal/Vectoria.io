import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import AllPhotographers from "./pages/AllPhotographers";
import { Checkout } from "./pages/payment/index.js";
import { Home } from "./pages/Home";
import { Landing } from "./pages/Landing";
import LocationImage from "./pages/LocationImage";
import LoginPage from "./pages/Login";
import News from "./pages/News";
import Profile from "./pages/Profile";
import Signup from "./pages/SignUp";
import UploadPage from "./pages/Upload";
import UserProfile from "./pages/UserProfile";



const App = () => {

  return (

    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/home' element={<Home />} />
        <Route path='/upload' element={<UploadPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/news' element={<News />} />
        <Route path='/allphotographers' element={<AllPhotographers />} />
        <Route path='/nearme' element={<AllPhotographers />} />
        <Route path='/userprofile/:email' element={<UserProfile />} />
        <Route path='/locationimage/:location' element={<LocationImage />} />
      </Routes>

    </Router>


  )
};

export default App;
