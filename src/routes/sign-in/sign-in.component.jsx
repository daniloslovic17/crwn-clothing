import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth"; 

import { auth, signInWithGooglePopup, createUserDocumentFromAuth, signInWithGoogleRedirect } from "../../utils/firebase/firebase.utils";

const SignIn = () =>{
    useEffect(() => {
        const handleRedirectResult = async () => {
            try {
                const response = await getRedirectResult(auth);
                if (response.user) {
                    const userDocRef = await createUserDocumentFromAuth(response.user);
                }
            } catch (error) {
            }
        };

        handleRedirectResult();
    }, []);

    const logGoogleUser = async() => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    };

    return(
        <div>
            <h1>Sign In page</h1>
            <button onClick={logGoogleUser}>
                Sign in with Google PopUp
            </button>
            <button onClick={signInWithGoogleRedirect}>
                Sign in with Google Redirect
            </button>
        </div>
    );
}

export default SignIn;