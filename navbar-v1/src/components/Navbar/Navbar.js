import React, { useState } from "react";
import { Button } from "../Button";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";

function Navbar() {
  const [navState, setNavState] = useState({ clicked: false });

  const handleClick = () => {
    setNavState({ clicked: !navState.clicked });
  };
  return (
    <div>
      <nav className="NavbarItems">
        <h1 className="navbar-logo">
          React | Nav <i className="fab fa-react"></i>
        </h1>
        <div className="menu-icon" onClick={handleClick}>
          <i className={navState.clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={navState.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
        <Button>Sign Up</Button>
      </nav>
    </div>
  );
}

export default Navbar;
