import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  const { cart } = await req.json();

  console.log(cart);
  

  const line_items = cart.map((item) => ({
    price_data: {
      currency: "usd",
      product_data: {
        name: item.name,
      },
      unit_amount: item.price * 100,
    },
    quantity: item.quantity,
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    line_items,
    success_url: `${req.headers.get("origin")}/success`,
    cancel_url: `${req.headers.get("origin")}/cancel`,
  });

  return Response.json({ url: session.url });
}