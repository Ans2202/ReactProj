import React, { useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {setToken} from './Auth.js'



const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleInput = (e) => {
        const { name, value } = e.target;

        if (name === 'email') {
            setEmail(value);
            setErrorEmail(''); // Clear the error for the email field
        } else if (name === 'password') {
            setPassword(value);
            setErrorPassword(''); // Clear the error for the password field
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post("http://localhost:3001/login", {
            email: email,
            password: password,
        })
        .then(res => {
            console.log(res);
            if (res.data === 'Login successful') {
                navigate('/Home');
            } else {
                setError('Invalid email or password');
            }
        })
        .catch(err => {
            console.log(err);
            setError('Internal Server Error');
        });
    };
    return (
        <div className='container-fluid'>
            <div className='row vh-100 justify-content-center align-items-center'>
                <div className='col-md-4'>
                    <div className='card shadow'>
                        <div className='card-body'>
                            <h2 className='text-center mb-4'>Login</h2>
                            <form onSubmit={handleSubmit}>
                                <div className='mb-3'>
                                    <label htmlFor="email" className='form-label'><strong>Email</strong></label>
                                    <input type="email" className='form-control' name='email' onChange={handleInput}
                                        placeholder='Enter Email' />
                                    {errorEmail && <span className='text-danger'>{errorEmail}</span>}
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor="password" className='form-label'><strong>Password</strong></label>
                                    <input type="password" className='form-control' name='password' onChange={handleInput}
                                        placeholder='Enter Password' />
                                    {errorPassword && <span className='text-danger'>{errorPassword}</span>}
                                </div>
                                <div className='d-grid gap-2'>
                                    <button className='btn btn-success' type='submit'>Log in</button>
                                    <p className='text-center mt-3'>By logging in, you agree to our terms and conditions</p>
                                    <Link to="/signup" className='btn btn-outline-secondary text-decoration-none' type='button'>Create Account</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;