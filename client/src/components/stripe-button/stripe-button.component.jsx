import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey =
		'pk_test_51Hc2wBBczRsScN8t8gym19lhzl9GPnEsqlBqxWoC6YdrxTdTVj1fMimzJN4imuDWC8PjhWOPEuc4LpcCH3TrU1P800utMyo7oV';

	const onToken = (token) => {
		axios({
			url: 'payment',
			method: 'post',
			data: {
				amount: priceForStripe,
				token: token
			}
		})
			.then((response) => {
				alert('Payment successful');
			})
			.catch((error) => {
				console.log('Payment error: ', error);
				alert('There was an issue with your payment. Please make sure you use the credit card provided.');
			});
	};

	return (
		<StripeCheckout
			label="Pay Now"
			name="CRWN Clothing Ltd."
			billingAddress
			shippingAddress
			image="https://sendeyo.com/up/d/f3eb2117da"
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel="Pay Now"
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeCheckoutButton;
