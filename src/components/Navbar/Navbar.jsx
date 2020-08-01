import React, { Component } from 'react';
import './Navbar.scss';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar sticky-top navbar-expand-lg navbar-dark py-4" style={{boxShadow: "none"}}>
                <div className="container">
                    <a className="navbar-brand logo-image" href="#top">
                        <img src="https://i.ibb.co/nzkZ8By/brand1.png" alt=""/>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                            aria-controls="basicExampleNav"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse ml-auto" id="navbarSupportedContent" style={{height: "40px"}}>
                        <ul className="navbar-nav ml-auto my-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#skills">About Me</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#skills">Skills</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#projects">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;