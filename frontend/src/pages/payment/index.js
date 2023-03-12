import React, { useState } from 'react'
import StripeCheckout from 'react-stripe-checkout'
import axios from "axios"

export const Checkout = () => {

    const [product] = useState({
        name: "Neil's Amazing gallery",
        price: 200,
        desc: "This payment unlocks all of neils photos !"
    })
    async function tokenHandler(token, addresses) {
        const res = await axios.post("http://localhost:3005/checkout", { token, product })
        console.log(res)
    }
    return (
        <>

            <button><StripeCheckout
                stripeKey='pk_test_51BTUDGJAJfZb9HEBwDg86TN1KNprHjkfipXmEDMb0gSCassK5T3ZfxsAbcgKVmAIXF7oZ6ItlZZbXO6idTHE67IM007EwQ4uN3'
                token={tokenHandler}
                amount={product.price}
                name={product.name}
                billingAddress
                shippingAddress
            /></button>
        </>
    )
}
