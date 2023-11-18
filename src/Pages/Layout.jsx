import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const Layout = () => {
  return (
    <main>
      <Navbar />
      <Outlet />
      <Footer />
      <ReactQueryDevtools />
    </main>
  );
};

export default Layout;
