import { useContext, useState } from "react";
import { FcGoogle } from 'react-icons/fc'
import { Link, NavLink, Navigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { Button, TextInput } from 'flowbite-react';
import authAnimation from '../../resources/authAnimation.json';
import Lottie from "lottie-react";
import { updateProfile } from "firebase/auth";

const Register = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const { handleGoogleSignIn, createUser } = useContext(AuthContext);

    const handleRegister = () => {
        const name = document.getElementById('name1').value;
        const email = document.getElementById('email1').value;
        const password = document.getElementById('password1').value;
        const photo = document.getElementById('photo1').value;

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
            const user = result.user;
            updateProfile(user, {
                displayName : name,
                photoURL: photo
            })
        })
    }

    return (
        <div>
            <div className="relative">
                <img src="../../resources/pexels-rushow-khan-122107.jpg" className="h-[360px] w-full object-cover" alt="" />
                <div className="h-[360px] bg-gradient-to-b from-[#0000008d] to-[#00000067] absolute top-0 w-full">
                    <h2 className="text-white text-7xl mt-60 ml-28" data-aos="fade-right" data-aos-duration="1000">Get On Board!</h2>
                </div>
            </div>
            <section className="md:flex items-center md:w-3/4 mx-auto">
                <div className="space-y-6 w-1/2 mt-16 mx-auto">
                    <div>
                        <TextInput
                            id="name1"
                            placeholder="Type your name..."
                        />
                    </div>
                    <div>
                        <TextInput
                            id="photo1"
                            placeholder="Your photoURL..."
                        />
                    </div>
                    <div>
                        <TextInput
                            id="email1"
                            placeholder="Type your email..."
                        />
                    </div>
                    <div>
                        <TextInput id="password1" type="password" placeholder="Should have at least 6 characters, one uppercase and one special character..." required />
                    </div>
                    {error && <p className="text-red-500 mt-2 pl-2 text-xs">{error}</p>}
                    {success && <p className="text-green-500 mt-2 pl-2 text-xs">{success}</p>}
                    <div className="w-full">
                        <Button onClick={handleRegister} color="success" className="w-full">Register</Button>
                    </div>
                    <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
                        Already registered?&nbsp;
                        <Link to={'/login'}><p className="text-green-700 hover:underline underline">
                            Sign in to your existing account
                        </p></Link>
                    </div>
                    <div className="flex items-center gap-3 w-fit mx-auto">
                        <span>Or, sign in with</span><Button onClick={handleGoogleSignIn} color="gray"><FcGoogle className="mr-1 text-xl"></FcGoogle>Google</Button>
                    </div>
                </div>
                <div>
                    <Lottie loop animationData={authAnimation}></Lottie>
                </div>
            </section>
        </div>
    );
};

export default Register;