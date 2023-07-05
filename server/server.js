require('dotenv').config()
const express = require('express')
const cors = require('cors')
const stripe = require('stripe')(process.env.STRIPE_API_KEY)

const app = express()
app.use(cors())
app.use(express.static('public'))
app.use(express.json)

app.post("/checkout", cors(), async (req, res) => {
    console.log(req.body)
    const items = req.body.items
    let lineItems = []
    items.forEach((item) => {
        lineItems.push(
            {
                price: item.id,
                quantity: 1
            }
        )
    })

    const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        success_url: "http://localhost:5173/success",
        cancel_url: "http://localhost:5173/cancel",
    })

    res.send(JSON.stringify({
        url: session.url
    }))
})

app.listen(4000, () => console.log("LISTENING ON PORT 4000"))