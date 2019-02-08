import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <Router>
                <header>
                    <nav className={'grey darken-3'}>
                        <div className={'container'}>
                            <div className="nav-wrapper">
                                <Link to={'/'} className="brand-logo">C-Rate <b>Privat24</b></Link>
                            </div>
                        </div>
                    </nav>
                </header>
            </Router>
        );
    }
}

export default Header;
