import React from "react";
import { Route, Routes } from "react-router-dom";
import DefaultLayout from "../layout/DefaultLayout";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        {/* Default Layout */}
        <Route path="/" element={<DefaultLayout />} >
        </Route>
      </Routes>
    </>
  );
};

export default AppRoutes;
