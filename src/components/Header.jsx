import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/">1</NavLink>
            <div className="link-info">
              <div className="step-num">Step 1</div>
              <div className="step-name"> Personal Information</div>
            </div>
          </li>
          <li>
            <NavLink to="/address">2</NavLink>
            <div className="link-info">
              <div className="step-num">Step 2</div>
              <div className="step-name"> Address Information </div>
            </div>
          </li>
          <li>
            <NavLink to="/confrmation">3</NavLink>
            <div className="link-info">
              <div className="step-num">Step 3</div>
              <div className="step-name">Confirmation</div>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
