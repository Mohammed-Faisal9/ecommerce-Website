export async function createCheckoutSession(items) {
    try {
        const res = await fetch("/api/checkout", {
      method: "POST",
      body: JSON.stringify({
        cart: items.map((item) => ({
          name: item.product_id?.name,
          id: item.product_id.$id,
          quantity: item.quantity,
          price: item.product_id?.discount
            ? Math.ceil(
                item.product_id.price -
                  (item.product_id.price * item.product_id?.discount) / 100,
              )
            : item.product_id.price,
        })),
      }),
    });
    const data = await res.json();

    window.location.href = data.url;
    }
    catch (error) {
        console.log(error);
    }
}