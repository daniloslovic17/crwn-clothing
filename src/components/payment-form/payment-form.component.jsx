import { CardElement } from "@stripe/react-stripe-js";

import Button, { BUTTON_TYPES_CLASSES } from '../button/button.component';

import { PaymentFormContainer, FormContainer } from "./payment-form.styles";

const PaymentForm = () => {
    return(
        <PaymentFormContainer>
            <FormContainer>
                <h2>Credit Card Payment: </h2>
                <CardElement />
                <Button buttonType={BUTTON_TYPES_CLASSES.inverted}>Pay Now</Button>
            </FormContainer>
        </PaymentFormContainer>
    );
}

export default PaymentForm;