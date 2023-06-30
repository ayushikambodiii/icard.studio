import React from "react";
import { Route, Routes } from "react-router-dom";
import DefaultLayout from "../layout/DefaultLayout";
import Home from "../page/Home";
import FontPickerDemo from "../page/FontPickerDemo";
import Hoc from "../page/Hoc";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        {/* Default Layout */}
        <Route path="/" element={<DefaultLayout />} >
        {/* Home  */}
        <Route path="/home" element={<Home />} />
        {/* Font Picker Demo  */}
        <Route path="/font-picker-demo" element={<FontPickerDemo />} />
        {/* Hoc */}
        <Route path="/higher-order" element={<Hoc />} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRoutes;
