import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Footer() {
  const location = useLocation();

  // Exclude the footer from the /shop route
  if (location.pathname === '/shop') {
    return null;
  } 
  
    return (
        <section className='section footer bg-c-dark test-white'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4'>
                        <h6 className='text'>Company information</h6>
                        <hr />
                        <p className='text-style'>
                            At our company "ShopRock", we're working hard to create a shopping app that's easy to use and keeps your information safe. We want it to work well on your phone or computer, no matter what you use. Our main goal is to make shopping simple and fun. We're making sure you can easily find what you want and buy it without any hassles. We're always learning from how people use the app so we can make it even better. Our aim is to make shopping a great experience for everyone who uses our app.
                        </p>
                    </div>
                    <div className='col-md-4'>
                        <h6>Quick Links</h6>
                        <hr />
                        <div><Link to="/">Home</Link></div>
                        <div><Link to="/shop">Shop</Link></div>
                        <div><Link to="/about">About</Link></div>
                        <div><Link to="/">Contact</Link></div>
                        <div><Link to="/">Blog</Link></div>
                    </div>
                    <div className='col-md-4'>
                        <h6>Contact information</h6>
                        <hr />
                        <div><p className='text-white-mb-1'>19th floor disney, Mumbai Maharashtra</p></div>
                        <div><p className='text-white-mb-1'>+91 9876639838</p></div>
                        <div><p className='text-white-mb-1'>+91 22334432</p></div>
                        <div><p className='text-white-mb-1'>Shoprock19@gmail.com</p></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;
