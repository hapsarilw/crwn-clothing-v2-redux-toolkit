require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

exports.handler = async (event) => {
    try {
        const { amount } = JSON.parse(event.body)
        // make request to stripe
        const paymentIntent = await stripe.paymentIntent.create({
            amount,
            currency: "usd",
            payment_method_types: ['card']
        });
        // return an object
        return {
            statusCode: 200,
            // JSON.stringify -> make an object
            body: JSON.stringify({ paymentIntent })
        }
    } catch (error) {
        console.log({ error });

        return {
            status: 400,
            body: JSON.stringify({ error }),
        }
    }
    /* Need Netlify CLI */
}

