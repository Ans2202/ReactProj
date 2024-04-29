import React from 'react';
import VMC from './inc/vmc';

function Aboutus(){
    return(
        <div>
            <section className='py-2 bg-c-light'>
            <div className='container'>
                <div className='row'>
                    <div className='d-flex justify-content-between align-items-end'>
                        <h4 align="bottom">About Us</h4>
                        <h6 className='float-end'>
                            Home/ About Us
                        </h6>
                    </div>

                </div>

            </div>
            </section>

            <section className='section bg-light border-bottom'>
                <div  className='container'>
                    <h5 className='main-heading'>ShopRock</h5>
                    <div className='underline'></div>
                    <p>
                    At our company "ShopRock", we're working hard to create a shopping app that's easy to use and keeps your information safe. We want it to work well on your phone or computer, no matter what you use. Our main goal is to make shopping simple and fun. We're making sure you can easily find what you want and buy it without any hassles. We're always learning from how people use the app so we can make it even better. Our aim is to make shopping a great experience for everyone who uses our app.
                        
                    </p>
                </div>

            </section>
            <hr></hr>
            <VMC/>
            <hr/>

        </div>

    );

}

export default Aboutus;