import {NextResponse} from 'next/server'
import axios from 'axios'
import prismaClient from "@/app/libs/prismadb";

const wakeFernKey = '4ae9400a1eda4f14b3e7227f24b74b44'
const success =(position)=> {
    // console.log(position)
  }
  const error = ()=> {
    console.log("err")
  }
  const getCoords= ()=> {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success,error);
    }
    }

   
  
    const convertAddressToLongLat = async(address) => {
      const r= await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyCpEnRDxXlbte7zyGRMFmsKMqwcecOEfqc`);
      const location = r.data.results[0].geometry.location;
      return location;
    }
      
    
export async function GET() {
    //**WAKEFERN**/
    const data =await axios.get("https://apimdev.wakefern.com/mockexample/V1/getStoreDetails/", {
    headers: {
        'Ocp-Apim-Subscription-Key': wakeFernKey
    }
    });
    const wakeFernStores = await data.data;
    for(var i =0;i< wakeFernStores.length;i++) {
        let address =encodeURIComponent(`${wakeFernStores[i].Address}, ${wakeFernStores[i].City}, ${wakeFernStores[i].State}`) 
        let location =await convertAddressToLongLat(address)
        console.log(location)
        // try {
        //     var newLocation = await prismaClient.location.create({
        //         data: {
        //             address:wakeFernStores[i].Address,
        //             longitude:location.lat,
        //             latitude:location.lng,
        //         }
        //     })
        // } catch (error) {
            
        //     console.error(error)
        // }
        
    }

    return NextResponse.json(wakeFernStores)
   
}