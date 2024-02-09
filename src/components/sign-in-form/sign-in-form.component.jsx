import { useState } from "react";
import { signInWithGooglePopup, handleSignInWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import './sign-in-form.styles.scss';

const defaultFormFields = {
    email: '',
    password: ''
};

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try{    
            await handleSignInWithEmailAndPassword(email, password);
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
        await signInWithGooglePopup();
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