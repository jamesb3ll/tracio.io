import Link from 'next/link';
import { useMemo, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { PrimaryButton } from '../Button';
import { cx } from '../../utils/utils';

const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');

export function SignupForm() {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const payload = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement)!,
    });

    console.log('[PaymentMethod]', payload);
  };

  return (
    <form className="space-y-2 text-gray-700 w-1/2" onSubmit={handleSubmit}>
      <h3 className="text-md font-semibold tracking-wide">
        Get full unlimited access by creating an account
      </h3>
      <p className="text-sm">
        You'll only be charged based on your usage at the end of every month,{' '}
        <strong>no traffic, no costs</strong>. View our{' '}
        <Link href="/#pricing">
          <a className="font-bold text-brand-500">traffic-based pricing</a>
        </Link>
        .
      </p>
      <div className="flex flex-wrap -mx-2 space-y-4 md:space-y-0">
        <div className="w-full px-2 md:w-1/2">
          <label className="block mb-1" htmlFor="formGridCode_name">
            Name
          </label>
          <input
            className="w-full h-10 px-3 text-base placeholder-gray-500 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            type="text"
            id="formGridCode_name"
            placeholder="Alex Doe"
          />
        </div>
        <div className="w-full px-2 md:w-1/2">
          <label className="block mb-1" htmlFor="formGridCode_last">
            Email
          </label>
          <input
            className="w-full h-10 px-3 text-base placeholder-gray-500 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            type="text"
            id="formGridCode_last"
            placeholder="your@email.com"
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="w-full">
          <label className="block mb-1" htmlFor="formGridCode_card">
            Card number
          </label>
          {/* <input
              className="w-full h-10 px-3 text-base placeholder-gray-500 border rounded-lg focus:shadow-outline"
              type="text"
              id="formGridCode_card"
              placeholder="XXXX XXXX XXXX XXXX"
            /> */}
          <CreditCardInput />
        </div>
      </div>
      <PrimaryButton className="w-full h-8 px-3 font-normal" disabled={!stripe}>
        {!stripe ? 'Loading...' : 'Create Account'}
      </PrimaryButton>
    </form>
  );
}

function CreditCardInput() {
  const [focused, setFocus] = useState(false);
  const options = useMemo(
    () => ({
      style: {
        base: {
          fontSize: '16px',
          color: '#424770',
          letterSpacing: '0.025em',
          fontFamily: 'Source Code Pro, monospace',
          '::placeholder': {
            color: '#FF000',
          },
        },
        invalid: {
          color: '#9e2146',
        },
      },
    }),
    []
  );
  return (
    <div className={cx('w-full h-11 p-3 border rounded-lg', focused && 'border-2 border-blue-600')}>
      <CardElement
        options={options}
        onReady={() => console.log('CardElement [ready]')}
        onChange={event => console.log('CardElement [change]', event)}
        onBlur={() => setFocus(false)}
        onFocus={() => setFocus(true)}
      />
    </div>
  );
}

export default function StripeWrapper() {
  return (
    <Elements stripe={stripePromise}>
      <SignupForm />
    </Elements>
  );
}
