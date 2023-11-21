import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <main>
      <aside className='sidebar'>
        <NavLink to={"/"} className={""}>
          Home
        </NavLink>
        <NavLink to={"/about"} className={""}>
          Stocks
        </NavLink>
        <NavLink to={"/crypto"} className={""}>
          Crypto
        </NavLink>
      </aside>
    </main>
  );
};

export default Sidebar;
