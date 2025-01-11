import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Homepage.css";
import "@fontsource/roboto";
export default function Navbar() {
  const resetPage = () => {
    window.location.reload(); // Reloads the entire page
  };
  return (
    <div className="overall">
      <div class="heading">
        <div className="heading" onClick={resetPage}>
          <h1>Gurdial Metal Industries || Gurdial Udyog</h1>
        </div>
      </div>
      <div className="nav">
        <div className="nav-link">About</div>
        <div className="nav-link">Contact Us</div>
      </div>
    </div>
  );
}
