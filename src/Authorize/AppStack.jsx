import React from "react";
import { Routes, Route } from "react-router-dom";
import AppNavBar from "../Navigation/appNavBar";
import Home from "../pages/AppPages/Home";
import Profile from "../pages/AppPages/Profile";
import BookPage from "../pages/AuthPages/BookPage";
import Activity from "../pages/AppPages/Activity";
import { useAuthContext } from "./AuthContext";

function AppStack() {
  const { state, dispatch } = useAuthContext();
  const { id: userId } = state.user; // Destructure the userId from the state.user object

  let data = state.user;

  // Remove the useEffect hook, it's not necessary in this case

  return (
    <>
      <h1>AppStack</h1>
      <AppNavBar userId={userId} /> {/* Pass the userId to AppNavBar */}
      <Routes>
        {/* Remove the string concatenation, and use parameter syntax */}
        <Route path="/home/:userId" element={<Home data={data} />} />
        <Route path="/profile/:userId" element={<Profile data={data} />} />
        <Route path="/activity/:userId" element={<Activity data={data} />} />
        <Route path="/book/:userId" element={<BookPage data={data} />} />
      </Routes>
    </>
  );
}

export default AppStack;
