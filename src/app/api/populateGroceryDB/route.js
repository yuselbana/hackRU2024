import {NextResponse} from 'next/server'
import Stripe from 'stripe'
import axios from 'axios'


// const stripePrivKey= 'sk_test_51Oxf73L2pgkAvJUOKCE6iwc2UrClAY9Ans5kcoTplElafggRyUNJTOpK6iJ0oeVUiytbN66k5bmE6MurpObambbC00dfw2lAqG';
const wakeFernKey = '4ae9400a1eda4f14b3e7227f24b74b44'
export async function GET() {
    //**WAKEFERN**/
    const data =await axios.get("https://apimdev.wakefern.com/mockexample/V1/getItemDetails/", {
    headers: {
        'Ocp-Apim-Subscription-Key': wakeFernKey
    }
    });

    const wakeFernProducts = await data.data;











    //**STRIPE**/
    
    
    const stripe = new Stripe(stripePrivKey)
   
    const productArray=[]
       
    const listGroceries = async()=> {
        let p= await stripe.products.list({limit:100})
        return p.data.reverse();
    }
    var reverseGroceries = await listGroceries();
    if(reverseGroceries.length == 0) {
        for(var i =0; i<  wakeFernProducts.length;i++) {
            let product = stripe.products.create({
                name: wakeFernProducts[i].Description,
                default_price_data:{currency:'usd',unit_amount_decimal:parseInt(wakeFernProducts[i].Price.slice(1,5))*100}
            }) 
            productArray.push(product);
            reverseGroceries = await listGroceries();
            console.log("added new grocery " + wakeFernProducts[i].Description);
        }
    }else {

    }
    
//    const mapArr = [];
//    for(var i =0; i< reverseGroceries.length;i++) {
//     mapArr[i] = {
//         name:reverseGroceries[i].name,
//         price:reverseGroceries[i].default_price,
//     }
//     mapArr[i].image= "some image"
//    }
//    console.log(mapArr)


    return NextResponse.json(productArray)
}



   