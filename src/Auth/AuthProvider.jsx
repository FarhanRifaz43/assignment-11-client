import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "./firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import Swal from "sweetalert2";

const provider = new GoogleAuthProvider();

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const reload = JSON.parse(localStorage.getItem('productName'));
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [storage, setStorage] = useState(reload);
    const storageString = JSON.stringify(storage ? storage : [])
    localStorage.setItem('productName', storageString);

    const setLocalStorage = (param) => {
        const newStorage = [...storage, param];
        setStorage(newStorage);
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Item added to cart!',
            showConfirmButton: false,
            timer: 1500
        })
    }

    const prevTheme = JSON.parse(localStorage.getItem('theme'))
    const [theme, setTheme] = useState(prevTheme ? prevTheme : 'light')
    document.querySelector('html').setAttribute('data-theme', theme)
    localStorage.setItem('theme', JSON.stringify(theme))







    const removeLocalStorage = (product) => {
        const newCart = storage.filter(item => item !== product);
        setStorage(newCart);
        window.location.reload();
    }

    const handleGoogleSignIn = () => {
        setLoading(true);
        return (
            signInWithPopup(auth, provider)
                .then(() => {
                    window.location.href = '/'
                })
                .catch(error)
        );
    }

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unSubscribe();
        }
    }, [])
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }
    const authInfo = { user, loading, createUser, signInUser, setUser, logOut, handleGoogleSignIn, setLoading, setLocalStorage, removeLocalStorage, theme, setTheme }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
}

export default AuthProvider;