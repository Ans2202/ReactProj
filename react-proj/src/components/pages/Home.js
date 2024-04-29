import React from 'react';
import Slider from '../inc/Slider';
import {Link} from 'react-router-dom';
import VMC from './inc/vmc';
import pic2 from '../images/pic2.png'
import pic4 from '../images/pic4.png';
import pic5 from '../images/pic5.png';

function Home(){
    return(
        <div>
            <Slider />
            <section className="section">
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12 text-center'>
                            <h3 className='main-heading'>Welcome to ShopRock</h3>
                            <div className='underline mx-auto'>

                            </div>
                            <h5 className='title'>Your Need Our Responsibility...</h5>
                            <p>
                            Welcome to our online store "ShopRock", where you'll find awesome stuff just for you! 
                            We've got a bunch of cool things that you'll love. 
                            Whether it's stylish clothes that make you look great or the latest gadgets that make life easier, we've got you covered.
                             Our home products are both useful and nice-looking, so your place can be awesome too.
                              We're all about giving you great service, getting your stuff to you fast, and making sure your shopping is easy.
                               Come check out what's new and classic, all ready for you to buy without any hassle. Let's make your shopping experience super fun and enjoyable!
                            </p>
                            <Link to ="/about" className='btn btn-warning sahadow'>Read more </Link>
                            

                        </div>
                    </div>
                </div>

            </section>
            <VMC/>
           
        <section className="section bg-light border-top">
                <div className='container'>
                <div className='col-md-12 mb-4 text-center'>
                            <h3 className='main-heading'>Our services</h3>
                            <div className='underline mx-auto'>

                            </div>
                    <div className='row'>
                       
                            <div className='col-md-4 '>
                                <div className='card shadow'>
                                    <img src={pic2} className='w-100 border-botom' alt="Services"/>

                                <div className='card-body'>
                                    <h6>Service 1</h6>
                                    <p>
                                        User Friendly
                                    </p>
                                    <Link to="/service1" className='btn btn-link'>Read more</Link>
                                    
                                    </div>

                                </div>                      
                             </div>
                             <div className='col-md-4 '>
                                <div className='card shadow'>
                                    <img src={pic4} className='w-100 border-botom' alt="Services"/>

                                <div className='card-body'>
                                    <h6>Service 2</h6>
                                    <p>
                                        Flexible Payments
                                    </p>
                                    <Link to="/service2" className='btn btn-link'>Read more</Link>
                                    
                                    </div>

                                </div>                      
                             </div>
                             <div className='col-md-4 '>
                                <div className='card shadow'>
                                    <img src={pic5} className='w-100 border-botom' alt="Services"/>

                                <div className='card-body'>
                                    <h6>Service 3</h6>
                                    <p>
                                        24*7 Delivery
                                    </p>
                                    <Link to="/service3" className='btn btn-link'>Read more</Link>
                                    
                                    
                                    </div>

                                </div>                      
                             </div>
                        </div>
                     </div>
                </div>

            </section>


        </div>

    );

}

export default Home;