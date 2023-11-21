import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";
import BottomNav from "../Components/BottomNav";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const Layout = () => {
  return (
    <main>
      <Navbar />
      <Outlet />
      <BottomNav />
      <ReactQueryDevtools />
    </main>
  );
};

export default Layout;
