import React from 'react';
import SectionTitle from '../../../../components/shared/sectionTitle/SectionTitle';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckOutForm from './CheckOutForm';
const Payment = () => {
    const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
    return (
        <div>
            <SectionTitle heading="Payment" subHeading="pay before you eat"></SectionTitle>
            <div>
            <Elements stripe={stripePromise}>
      <CheckOutForm/>
    </Elements>
            </div>
        </div>
    );
};

export default Payment;