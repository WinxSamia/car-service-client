
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import loginImg from '../../assets/images/login/login.svg'
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Signup = () => {
    const { createUser } = useContext(AuthContext)
    const handleSignup = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(err => console.error(err));

        const confirmation = window.alert('User created successfully');
        // form.reset();
    }

    return (
        <div className="hero w-full my-20">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img className='w-3/4' src={loginImg} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h2 className='text-3xl text-center mb-6 font-bold'>SignUp</h2>
                    <div className="card-body">
                        <div className="form-control">

                            <form onSubmit={handleSignup} className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" name='Name' className="input input-bordered" />
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' className="input input-bordered" />

                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>

                                <input type="password" placeholder="password" name='password' className="input input-bordered mb-5" />

                                <label>
                                    <input className="btn btn-primary" type="submit" value="Signup" />
                                </label>
                            </form>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <p className='text-center'>Have an account? <Link className='text-orange-600 font-semibold' to='/login'>Login</Link> </p>
                        <div className="form-control mt-6">


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;