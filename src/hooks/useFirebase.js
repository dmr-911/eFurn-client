import initializationAuthentication from "../firebase/firebase.init";
import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup
} from "firebase/auth";
import { useEffect, useState } from "react";

initializationAuthentication();
const auth = getAuth();

const useFirebase =() =>{
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const googleProvider = new GoogleAuthProvider();

    const googleSignIn = () =>{
       return signInWithPopup(auth, googleProvider);
    }

    const signUp = (email, password) =>{
        createUserWithEmailAndPassword(auth, email, password)
        .then((user) => {
            setUser(user);
        })
        .catch((error) => {
            setError(error.message);
        });
    };

    const login = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    };

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
            }
          });
    },[]);

    return {user, error, signUp, login, googleSignIn, setError, setUser};
};

export default useFirebase;