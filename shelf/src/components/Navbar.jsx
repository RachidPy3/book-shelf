import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="nav">
      <div className="logo">
        <Link to="/">My Shelf</Link>
      </div>
    </div>
  );
};
