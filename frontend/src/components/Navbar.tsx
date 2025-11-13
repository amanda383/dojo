import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className={`nav ${isOpen ? "open" : ""}`}>
            <button onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen}>
                Menu
            </button>
            <ul className="nav-links" style={{ display: isOpen ? "block" : "none" }}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;