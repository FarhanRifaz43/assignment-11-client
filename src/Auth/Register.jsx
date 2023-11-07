import { useContext, useState } from "react";
import { FcGoogle } from 'react-icons/fc'
import { AuthContext } from "../firebase/AuthProvider";
import { NavLink } from "react-router-dom";

const Register = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const { createUser, handleGoogleSignIn } = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        if (password.length < 6) {
            setError('Password should be at least 6 characters or longer');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setError('Your password should contain at least one uppercase character');
            return;
        }
        else if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
            setError('Your password should contain at least one special character');
            return;
        }
        setError('');
        setSuccess('');
        createUser(email, password)
            .then(result => {
                setSuccess('User created successfully!')
                window.location.href = '/'
            })
            .catch(err => {
                setError('There is already an account with this e-mail!')
            })
    }

    return (
        <div>
            <div className="min-h-screen">
                <div className="w-fit mx-auto items-center flex flex-col">
                    <div className="text-center lg:text-left" data-aos="zoom-in" data-aos-duration="600">
                        <h1 className="text-4xl font-bold text-center mt-16"><span className="text-pink-400">Register</span> to Get Started</h1>
                        <p className="py-6 text-center text-gray-500">We believe in growing and learning together. Join us in this exciting venture!</p>
                    </div>
                    <div className="flex-grow w-full border border-pink-400 rounded-lg bg-base-100 mt-10" data-aos="fade-up" data-aos-duration="600">
                        <div className="card-body rounded-lg">
                            <form onSubmit={handleRegister}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Enter Your e-mail</span>
                                    </label>
                                    <input type="email" placeholder="email here..." name="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Choose Password</span>
                                    </label>
                                    <input type="password" placeholder="input password..." name="password" className="input input-bordered" required />
                                </div>
                                {error && <p className="text-red-500 mt-2 pl-2 text-xs">{error}</p>}
                                {success && <p className="text-green-500 mt-2 pl-2 text-xs">{success}</p>}
                                <div className="form-control mt-6">
                                    <button className="btn hover:text-pink-400 text-black hover:bg-black">Register now</button>
                                    <div>
                                        <h2 className="mt-3 text-sm text-gray-500">Already have an account? <span className="text-pink-400 underline">
                                            <NavLink to={'/login'}>Login</NavLink>
                                        </span></h2>
                                    </div>
                                </div>
                            </form>
                            <div className="flex items-center gap-4 w-fit mx-auto mt-8">
                                <h2 className="font-bold">Get Started With</h2>
                                <button className="flex items-center gap-1 border border-pink-400 px-2 py-2 rounded-md" onClick={handleGoogleSignIn}><FcGoogle></FcGoogle>Google</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;