import axios from "axios";
import Stripe from "stripe";
import { NextResponse } from "next/server";
export async function POST(request) {
    
    const stripe = new Stripe(process.env.NEXT_STRIPE_PRIVATE_KEY)
    let data = await request.json();
    let priceId = data.priceId
    const session = await stripe.checkout.sessions.create({
        line_items: [
            {
                price:priceId,
                quantity:1,
            }
        
        ],
        mode: 'payment',
        //doesnt work in development, need "real" url
        success_url:'https://google.com/',
        // cancel_url:''
    })
        return NextResponse.json(session.url);
}