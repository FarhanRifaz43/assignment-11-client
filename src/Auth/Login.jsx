import { useContext, useState } from "react";
import { FcGoogle } from 'react-icons/fc'
import { NavLink } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const Login = () => {
    const { signInUser, handleGoogleSignIn } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInUser(email, password)
            .then(result => {
                setSuccess("Logged in successfully!")
                window.location.href = '/'
            })
            .catch(error => {
                setError("The credentials don't match. Check if they are valid and try again")
            })
    }

    return (
        <div>
            <div className="min-h-screen">
                <div className="w-fit mx-auto items-center flex flex-col">
                    <div className="text-center lg:text-left" data-aos="zoom-in" data-aos-duration="600">
                        <h1 className="text-4xl font-bold text-center mt-16"><span className="text-pink-400">Log In</span> To Your Account</h1>
                        <p className="py-6 text-center text-gray-500">Log in to proceed and access your personalized data, contents, features and much more!</p>
                    </div>
                    <div className="flex-grow w-full border border-pink-400 rounded-lg bg-base-100 mt-10" data-aos="fade-up" data-aos-duration="600">
                        <div className="card-body rounded-lg">
                            <form onSubmit={handleLogin}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Your e-mail</span>
                                    </label>
                                    <input type="email" placeholder="email here..." name="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="input password..." name="password" className="input input-bordered" />
                                    <label className="mt-2 mb-4 pl-2">
                                        <a href="#" className="text-xs underline mt-2">Forgot password?</a>
                                    </label>
                                    <div>
                                        <p className="mt-2 pl-2 text-xs text-pink-400">{error ? error : success}</p>
                                    </div>
                                </div>
                                <div className="form-control mt-2">
                                    <button className="btn hover:text-pink-400 text-black hover:bg-black">Login</button>
                                    <div>
                                        <h2 className="mt-3 text-sm text-gray-500">Don't have an account? <span className="text-pink-400 underline">
                                            <NavLink to={'/register'}>Register</NavLink>
                                        </span></h2>
                                    </div>
                                </div>
                            </form>
                            <div className="flex items-center gap-4 w-fit mx-auto mt-8">
                                <h2 className="font-bold">Sign-in With</h2>
                                <button className="flex items-center gap-1 border border-pink-400 px-2 py-2 rounded-md" onClick={handleGoogleSignIn}><FcGoogle></FcGoogle>Google</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;