import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                {/* <Link className="navbar-brand" to="/">Navbar</Link> */}
                <div className='collapse navbar-collapse' id='navbarsupportrouter'></div>


                <Link className='nav-link' to="/">Home</Link>


                <Link className='nav-link' to="/login">Login</Link>

                <Link className='nav-link' to="/registration">Registration</Link>

            </div>
        </nav>
    )
}

export default Navbar;