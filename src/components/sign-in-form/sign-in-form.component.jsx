import { useState, useContext } from "react";
import { signInWithGooglePopup, createUserDocumentFromAuth, handleSignInWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import './sign-in-form.styles.scss';
import { UserContext } from "../../context/user.context";

const defaultFormFields = {
    email: '',
    password: ''
};

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const { setCurrentUser } = useContext(UserContext);

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try{    
            const user = await handleSignInWithEmailAndPassword(email, password);
            setCurrentUser(user);
            resetFormFields();
        }
        catch(error) {
            switch(error.code){
                case "auth/invalid-credential":
                    alert("Incorrect Email or Password");
                    break;
                case "auth/user-not-found":
                    alert("No User Associated With This Email");
                    break;
                default:
                    console.log(error);
            }
        }
    }

    const signInWithGoogle = async() => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    };

    const handleChange = (event) => {
        const {name, value} = event.target;

        setFormFields({...formFields, [name]: value});
    }

    return(
        <div className="sign-in-container">
            <h2>Already have an account?</h2>
            <span>Sign In With Your Email And Password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email} />
                <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password} />
                <div className="buttons-container">
                    <Button type="submit">Sign In</Button>
                    <Button type="button" buttonType="google" onClick={signInWithGoogle}>Sign In With Google</Button>
                </div>
            </form>
        </div>
    );
}

export default SignInForm;