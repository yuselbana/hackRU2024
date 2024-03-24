// import {NextResponse} from 'next/server'
// import axios from 'axios'
// import prismaClient from "@/app/libs/prismadb";




   
  
//     const convertAddressToLongLat = async(address) => {
//       const r= await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.NEXT_GOOGLE_KEY}`);
//       const location = r.data.results[0].geometry.location;
//       return location;
//     }
      
    
// export async function GET() {
//     //**WAKEFERN**/
//     const data =await axios.get("https://apimdev.wakefern.com/mockexample/V1/getStoreDetails/", {
//     headers: {
//         'Ocp-Apim-Subscription-Key': process.env.NEXT_WAKE_FERN_KEY
//     }
//     });
//     const wakeFernStores = await data.data;
//     for(var i =0;i< wakeFernStores.length;i++) {
//         let address =encodeURIComponent(`${wakeFernStores[i].Address}, ${wakeFernStores[i].City}, ${wakeFernStores[i].State}`) 
//         let location =await convertAddressToLongLat(address)
//         // console.log(location)
//         try {
//             var newLocation = await prismaClient.location.create({
//                 data: {
//                     address:wakeFernStores[i].Address,
//                     longitude:location.lat,
//                     latitude:location.lng,
//                 }
//             })
//         } catch (error) {
            
//             console.error(error)
//         }
        
//     }

//     return NextResponse.json(wakeFernStores)
   
// }