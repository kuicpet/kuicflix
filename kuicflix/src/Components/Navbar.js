import React from 'react';
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <Link to="/" className="navbar-brand">KuicFlix</Link>
        </nav>
    )
}
