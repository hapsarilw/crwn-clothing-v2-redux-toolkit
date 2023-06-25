import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import { PaymentFormContainer, FormContainer } from './payment-form.styles'


const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const paymentHandler = async (e) => {
        e.preventDefault();
        console.log('payment handler')
        if (!stripe || !elements) {
            console.log('payment reject')
            return;
        }

        try {
            const response = await fetch('/.netlify/functions/create-payment-intent', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ amount: 10000 })
            }).then(res => res.json());
            console.log(response);
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <PaymentFormContainer>
            <FormContainer onSubmit={paymentHandler}>
                <h2>Credit Card Payment: </h2>
                <CardElement />
                <Button buttonType={BUTTON_TYPE_CLASSES.inverted}></Button>
            </FormContainer>
        </PaymentFormContainer>
    )
}
export default PaymentForm;