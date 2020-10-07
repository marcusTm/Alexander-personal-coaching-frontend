import * as React from "react";
import './navbar.css';
import { Link, NavLink } from 'react-router-dom';

export default class Navbar extends React.Component {

    /*
    componentDidMount() {
        window.addEventListener("scroll", this.resizeHeaderOnScroll);
    } 

    resizeHeaderOnScroll() {
        const distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 80,
            navbarEl = document.getElementById("navbar"),
            navbarlogoEl = document.getElementById("navbar-logo"),
            logoEl = document.getElementById("logo"), 
            navbarrightEl = document.getElementById("navbar-right");

        if (distanceY > shrinkOn) {
            navbarEl.style.padding = "0px";
            navbarlogoEl.style.margin = "25px 0px 0px 50px";
            logoEl.style.fontSize = "40px";
            logoEl.style.outlineWidth = "6px";
            navbarrightEl.style.padding = "46px 50px 0px 0px";
        } else {
            navbarEl.style.padding = "0px 0px 220px 0px";
            navbarlogoEl.style.margin = "85px 0px 0px 50px";
            logoEl.style.fontSize = "60px";
            logoEl.style.outlineWidth = "8px";
            navbarrightEl.style.padding = "133px 50px 0px 0px";
        }
    } */
  
    render() {
        return (
            <div id="navbar">
                    <div id="navbar-content">
                        <Link to={'/'} className="nav-link" id="navbar-logo">Mind Over Body</Link>
                        <div id="navbar-right">
                            <NavLink to={'/about-me'} className="nav-link">OM MIG</NavLink>
                            <NavLink to={'/processes'} className="nav-link">FORLØB</NavLink>
                            <NavLink to={'/clients'} className="nav-link">MINE KLIENTER</NavLink>
                            <NavLink to={'/contact'} className="nav-link">KONTAKT</NavLink>
                        </div>
                    </div>
            </div>
        );
    }
}