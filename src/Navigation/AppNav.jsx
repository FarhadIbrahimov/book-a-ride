import React from "react";
import { Routes, Route } from "react-router-dom";
import AuthStack from "../Authorize/AuthStack";
import AppStack from "../Authorize/AppStack";

import { useAuthContext } from "../Authorize/AuthContext";

function AppNav() {
  const { state, dispatch } = useAuthContext();

  return (
    <Routes>
      {/* Render AuthStack when the user is not logged in */}
      {!state.user ? <Route path="/*" element={<AuthStack />} /> : null}
      {/* Render AppStack when the user is logged in */}
      {state.user ? <Route path="/*" element={<AppStack />} /> : null}
      {/* Add a default route to handle other URLs */}
      <Route path="/*" element={<div>NOT FOUND</div>} />
    </Routes>
  );
}

export default AppNav;
