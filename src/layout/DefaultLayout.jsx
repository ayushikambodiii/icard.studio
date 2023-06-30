import React, { lazy } from "react";
import { Outlet } from "react-router-dom";
const Header = lazy(() => import('./Header'))
const Footer = lazy(() => import('./Footer'))


const DefaultLayout = () => {
  return (
    <>
      <Header />
      <main className="mt-56">
          <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default DefaultLayout;
