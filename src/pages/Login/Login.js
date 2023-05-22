import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginImg from '../../assets/images/login/login.svg'
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Login = () => {

    const { login } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
            .then(result => {
                const user = result.user;


                const currentUser = {
                    email: user.email
                }

                console.log(currentUser);

                // get jwt token
                fetch('http://localhost:5000/token', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        localStorage.setItem('user-token', data.token);
                        navigate(from, { replace: true });
                    });
                // form.reset();

            })
            .catch(error => console.log(error));
    }

    return (
        <div className="hero w-full my-20">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img className='w-3/4' src={loginImg} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h2 className='text-3xl text-center mb-6 font-bold'>Login</h2>
                    <div className="card-body">
                        <div className="form-control">

                            <form onSubmit={handleLogin} className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" name='email' className="input input-bordered" />

                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>

                                <input type="password" placeholder="password" name='password' className="input input-bordered mb-5" />

                                <label>
                                    <input className="btn btn-primary" type="submit" value="Login" />
                                </label>
                            </form>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                            <p className='text-center'>New to Car Genious? <Link className='text-orange-600 font-semibold' to='/signup'>Sign Up</Link> </p>
                            <div className="form-control mt-6">


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;