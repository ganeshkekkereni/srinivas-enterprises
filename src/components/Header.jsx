import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './image2.png';
import './Header.css';

const Header = () => {
    return (
        <header>
            <div className="logo"><img className='logo-image' src={Logo} alt='logo-im'/>SRINIVAS ENTERPRISES</div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Land">Land</Link></li>
                    <li><Link to="/Business">Business</Link></li>
                    
                </ul>
            </nav>
        </header>
    );
};

export default Header;


