import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Validation from './LoginValidation';
import axios from 'axios';

function Signup({ history }) {
  const [values, setValues] = useState({
    fullname: '',
    email: '',
    password: ''
  });
  const [error, setErrors] = useState({});
  // const [signupStatus, setSignupStatus] = useState('');

  const handleInput = (event) => {
    setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
  };


  function signup(event) {
    debugger
    event.preventDefault();
    axios.post("http://localhost:3001/signup", values,{
        headers: {
          'Content-Type': 'application/json',
        },
      })
    // .then(response => console.log(response))
    // .catch(err => console.log(err));

    .then((response) => {
      console.log(response);
      window.alert('Registration successful!');
      
      history.push('/login');
    })
    .catch((err) => console.log(err));
}

return (
  <div className='container-fluid'>
    <div className='row vh-100 justify-content-center align-items-center'>
      <div className='col-md-4'>
        <div className='card shadow'>
          <div className='card-body'>
            <h2 className='text-center mb-4'>Signup</h2>
            <form onSubmit={signup}>
              <div className='mb-3'>
                <label htmlFor='fullName' className='form-label'>
                  <strong>Full Name</strong>
                </label>
                <input
                  type='text'
                  className='form-control'
                  name='fullName'
                  onChange={handleInput}
                  placeholder='Enter Full Name'
                />
                {error.fullName && (
                  <span className='text-danger'>{error.fullName}</span>
                )}
              </div>

              <div className='mb-3'>
                <label htmlFor='email' className='form-label'>
                  <strong>Email</strong>
                </label>
                <input
                  type='email'
                  className='form-control'
                  name='email'
                  onChange={handleInput}
                  placeholder='Enter Email'
                />
                {error.email && (
                  <span className='text-danger'>{error.email}</span>
                )}
              </div>

              <div className='mb-3'>
                <label htmlFor='password' className='form-label'>
                  <strong>Password</strong>
                </label>
                <input
                  type='password'
                  className='form-control'
                  name='password'
                  onChange={handleInput}
                  placeholder='Enter Password'
                />
                {error.password && (
                  <span className='text-danger'>{error.password}</span>
                )}
              </div>

              <div className='d-grid gap-2'>
                <button className='btn btn-success' type='submit' value="Create an account">
                  Signup
                </button>
                <p className='text-center mt-3'>
                  By signing up, you agree to our terms and conditions
                </p>
                <Link
                  to='/login'
                  className='btn btn-outline-secondary text-decoration-none'
                >
                  Login
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
);
}

export default Signup;
