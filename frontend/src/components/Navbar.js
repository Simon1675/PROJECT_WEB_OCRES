import React from 'react'
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar">
            <Link className="Accueil" exact to="/">Home</Link>
            <Link className="Idees" exact to="/idees">Ideas</Link>
            <section className="titres_site">
            <h1 className="titre">Pépite</h1>
            <h2 className="sous-titre">Welcome on Pépite ! The web site that makes no sens...</h2>
            </section>
        </div>
    );
};

export default Navbar;