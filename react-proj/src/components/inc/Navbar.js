import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className='navbar-dark bg-dark shadow'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>

                        <nav className="navbar navbar-expand-lg bg-body-tertiary">

                            <div className="container-fluid">
                                <Link to="/" className="navbar-brand text-uppercase fw-bold display-4">
                                    <span style={{ fontFamily:'cursive', fontSize: '40px', fontStyle:'italic' }}>ShopRock</span>
                                </Link>

                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                                    

                                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <Link to="/" className="nav-link active">Home</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/shop" className="nav-link active">Shopping</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/about" className="nav-link active">About Us</Link>
                                        </li>
                                        <li className="nav-item">
                                       
                                            <Link to="/contact" className="nav-link active">Contact Us</Link>
                                        </li>
                                        <li className="nav-item">
                                       
                                            <Link to="/login" className="nav-link active">login</Link>
                                        </li>
                                        <li className="nav-item">
                                       
                                            <Link to="/Signup" className="nav-link active">Signup</Link>
                                        </li>
                                        
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
