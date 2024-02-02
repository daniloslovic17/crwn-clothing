import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD79_tyotS5EIR5F2ThbK98nqIqzoaCQOU",
    authDomain: "crwn-db-454b1.firebaseapp.com",
    projectId: "crwn-db-454b1",
    storageBucket: "crwn-db-454b1.appspot.com",
    messagingSenderId: "850065570464",
    appId: "1:850065570464:web:6f9fa43dc3539c0700e7c5",
    measurementId: "G-8C1LG21X8B"
};
  
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);

    if(!userSnapshot.exists()){
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            })
        } catch(error){
            console.log('error creating user', error.message)
        }
    }

    return userDocRef;

    // if user data does not exist
    // create / set the document with the data from userAuth in my collection

    // if user data exists
    // return userDocRef
};