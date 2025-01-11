import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Homepage.css";
import "@fontsource/roboto";
export default function Navbar() {
  return (
    <div className="overall">
      <div class="heading">
        <h1>Gurdial Metal Industries</h1>
      </div>
      <div className="nav">
        <div className="nav-link">About</div>
        <div className="nav-link">Contact Us</div>
      </div>
    </div>
  );
}
