import { Children, createContext } from "react";
import auth from "../config/firebaseConfig";
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";


export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {


    // google login

    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.error(error)
            })
    }

    // const user = 'kodom ali koi';
    // createUser
    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // getUser
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const authantication = {
        googleLogin,
        signUp,
        signIn

    }

    return (
        <AuthContext.Provider value={authantication}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;