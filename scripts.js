// scripts.js
document.getElementById('payment-form').addEventListener('submit', async function(event) {
    event.preventDefault();

    const stripe = Stripe('YOUR_STRIPE_PUBLIC_KEY');

    const { error, paymentIntent } = await stripe.createPaymentIntent({
        amount: 49900, // 499 INR
        currency: 'inr',
        payment_method_types: ['upi']
    });

    if (error) {
        console.error(error);
        alert('Payment failed. Please try again.');
    } else {
        alert('Payment successful!');
        // You can redirect to a success page or display a success message
    }
});
