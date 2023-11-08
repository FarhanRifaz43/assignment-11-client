import { useContext, useState } from "react";
import { FcGoogle } from 'react-icons/fc'
import { AuthContext } from "./AuthProvider";
import { Button, TextInput } from "flowbite-react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import authAnimation from '../../public/resources/authAnimation.json';
import Lottie from "lottie-react";

const Login = () => {

    const { signInUser, handleGoogleSignIn } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogin = e => {
        e.preventDefault();
        const email = document.getElementById('email1').value;
        const password = document.getElementById('password1').value;
        signInUser(email, password)
            .then(result => {
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                setError("The credentials don't match. Check if they are valid and try again")
            })
    }
    const googleSignIn = () => {
        handleGoogleSignIn()
        .then(result => {
            navigate(location?.state ? location.state : '/')
        })}
    

    return (
        <div>
            <div className="relative">
                <img src="https://i.ibb.co/CvzZJBs/pexels-rushow-khan-122107.jpg" className="h-[480px] w-full object-cover" alt="" />
                <div className="h-[480px] bg-gradient-to-b from-[#0000008d] to-[#00000067] absolute top-0 w-full">
                    <h2 className="text-white text-7xl mt-60 md:ml-28 ml-6" data-aos="fade-right" data-aos-duration="1000">Welcome Back!</h2>
                </div>
            </div>
            <section className="md:flex items-center md:w-3/4 mx-auto">
                <div className="space-y-6 w-1/2 mt-16 mx-auto">
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
                        <Button onClick={handleLogin} color="success" className="w-full">Login</Button>
                    </div>
                    <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
                        New here?&nbsp;
                        <Link to={'/register'}><p className="text-green-700 hover:underline underline">
                            Create your account
                        </p></Link>
                    </div>
                    <div className="flex items-center gap-3 w-fit mx-auto">
                        <span>Or, sign in with</span><Button onClick={googleSignIn} color="gray"><FcGoogle className="mr-1 text-xl"></FcGoogle>Google</Button>
                    </div>
                </div>
                <div>
                    <Lottie loop animationData={authAnimation}></Lottie>
                </div>
            </section>
        </div>
    );
};

export default Login;