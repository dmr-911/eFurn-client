import initializationAuthentication from "../firebase/firebase.init";
import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
    updateProfile,
    signOut
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

    const signUp = (email, password, name, navigate) =>{
        createUserWithEmailAndPassword(auth, email, password)
        .then((user) => {
            setUser(user);
            const newUser = {email, displayName : name};

        // send name to firebase after creation
          updateProfile(auth.currentUser, {
            displayName: name
          }).then(() => {
          }).catch((error) => {
          });
          navigate('/');
        })
        .catch((error) => {
            setError(error.message);
        });
    };

    const login = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    };

    const logOut = () =>{
        signOut(auth)
        .then(() => {
            // Sign-out successful.
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
                setUser({});
            }
          });
    },[]);

    return {user, error, signUp, login, googleSignIn, logOut, setError, setUser};
};

export default useFirebase;