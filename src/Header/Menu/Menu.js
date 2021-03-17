
import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.scss';


function Menu() {
	return (
        <div>
            <nav>
                <ul className="navbar-nav">
                    <li className="nav-font">  
                    <Link to="/post/create">Create Post</Link>
                    <Link to="/search">Search</Link>
                    </li>
                </ul>
            </nav>
            
        </div>
	);
}

export default Menu;