/* eslint-disable react/prop-types */
import React, { ReactNode } from 'react';
import { loadStripe, Stripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';


const stripeKey: string | undefined = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY;

if (!stripeKey) {
  throw new Error("La clé de publication Stripe n'est pas définie dans les variables d'environnement.");
}

const stripePromise: Promise<Stripe | null> = loadStripe(stripeKey);

interface StripeProviderProps {
  children: ReactNode;
}

const StripeProvider: React.FC<StripeProviderProps> = ({ children }) => (
  <Elements stripe={stripePromise}>
    {children}
  </Elements>
);

export default StripeProvider;
