// import {NextResponse} from 'next/server'
// import axios from 'axios'
// import { imgData } from '@/app/libs/data';
// import prismaClient from '@/app/libs/prismadb';
// import {Stripe} from 'stripe'


// export async function GET() {
//     //**WAKEFERN**/
//     const data =await axios.get("https://apimdev.wakefern.com/mockexample/V1/getItemDetails/", {
//     headers: {
//         'Ocp-Apim-Subscription-Key': process.env.NEXT_WAKE_FERN_KEY
//     }
//     });

//     var wakeFernProducts = await data.data;
//     wakeFernProducts.reverse()
    
//     const customProductArr = []
    
   
//     for(var i=0;i< wakeFernProducts.length-1; i++ ) {
//         customProductArr[i] = {
//             name:wakeFernProducts[i].Description.toUpperCase(),
//             category: wakeFernProducts[i].Department,
//             price: parseFloat(wakeFernProducts[i].Price.slice(1,5)),
//             image: imgData[i]
//         }
//         // console.log(wakeFernProducts[i].Description.toUpperCase())
        
//     }
//      const stripe = new Stripe(process.env.NEXT_STRIPE_PRIVATE_KEY)
   
//     const productArray=[]
       
//     const listGroceries = async()=> {
//         let p= await stripe.products.list({limit:100})
//         return p.data.reverse();
//     }

//     var reverseGroceries = await listGroceries();
    
//     if(reverseGroceries.length == 0) {
//         for(var i =0; i<  customProductArr.length;i++) {
//             let product = stripe.products.create({
//                 name: customProductArr[i].name,
//                 images:[customProductArr[i].image],
//                 default_price_data:{currency:'usd',unit_amount_decimal:parseInt(customProductArr[i].price)*100}
//             }) 
//             productArray.push(product);
//             reverseGroceries = await listGroceries();
//             console.log("added new grocery to stripe" + wakeFernProducts[i].Description);
//         }
//     }else {
//         console.log("populated")
//     }
//         const prices= await stripe.prices.list({
//             limit:100
//         })
//         const rawPrices = prices.data.reverse();
//     for(var i =0;i< customProductArr.length;i++) {
//         try {
//             var grocery = await prismaClient.grocery.create({
//                 data: {
//                     name : customProductArr[i].name,
//                     category: customProductArr[i].category,
//                     price: customProductArr[i].price,
//                     image: customProductArr[i].image,
//                     priceId: rawPrices[i].id
//                 }
//             })
//         } catch (error) {
//             console.log(customProductArr[i].name)
//             console.error(error)
//         }
        
//         console.log("added grocery to db " +customProductArr[i].name)
//     }
//     return NextResponse.json(wakeFernProducts)



//     // model Grocery{
//     //     id String @id @default(auto()) @map("_id") @db.ObjectId
//     //     name String
//     //     category String
//     //     price Float
//     //     image String 
//      // priceId String
//     //   }




// }



   