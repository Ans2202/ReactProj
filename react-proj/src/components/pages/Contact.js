import React from 'react';

function ContactUs() {
  return (
    <div>
      <section className='py-4 bg-c-light'>
        <div className='container'>
          <div className='row'>
            <div className='d-flex justify-content-between align-items-end'>
              <h4>Contact Us</h4>
              <h6 className='float-md-end'>
                Home / Contact Us
              </h6>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='container'>
          <div className='card shadow'>
            <div className='card-body'>
              <div className='row'>
                <div className='col-md-8 mx-auto'>
                  <h6>Contact Form</h6>
                  <hr />
                  <div className='form-group'>
                    <label htmlFor="fullName">Full Name</label>
                    <input type="text" className="form-control" id="fullName" placeholder='Enter your name' />
                  </div>
                  <div className='form-group'>
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input type="tel" className="form-control" id="phoneNumber" placeholder='Enter your phone number' />
                  </div>
                  <div className='form-group'>
                    <label htmlFor="email">Email Id</label>
                    <input type="email" className="form-control" id="email" placeholder='Enter your Email Address' />
                  </div>
                  <div className='form-group'>
                    <label htmlFor="message">Message</label>
                    <textarea rows="3" className="form-control" id="message" placeholder='Enter your Message/Feedback...' />
                  </div>
                  <div className='form-group py-3'>
                    <button type="button" className='btn btn-primary shadow w-100'>Send Message</button>
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

export default ContactUs;
