import initializationAuthentication from "../firebase/firebase.init";
import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    onAuthStateChanged
} from "firebase/auth";
import { useEffect, useState } from "react";

initializationAuthentication();
const auth = getAuth();

const useFirebase =() =>{
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

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
        signInWithEmailAndPassword(auth, email, password)
        .then((user) => {
            setUser(user);
        })
        .catch((error) => {
            setError(error.message);
        });
    };

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
            }
          });
    },[auth]);

    return {user, error, signUp, login, setError, setUser};
};

export default useFirebase;