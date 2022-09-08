import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function ProjectNav() {
  return (
    <>
      <div className="navbar bg-light">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink to="1" className="nav-link">
              Project1
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="2" className="nav-link">
              Project2
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="5" className="nav-link">
              Project5
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="3" className="nav-link">
              Project3
            </NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
}
