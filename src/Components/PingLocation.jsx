'use client';
import { useEffect,useState } from "react";
import axios from 'axios'

function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
          var R = 6371; // Radius of the earth in km
          var dLat = deg2rad(lat2-lat1);  // deg2rad below
          var dLon = deg2rad(lon2-lon1); 
          var a = 
            Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
            Math.sin(dLon/2) * Math.sin(dLon/2)
            ; 
          var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
          var d = R * c; // Distance in km
          return d;
        }
        
function deg2rad(deg) {
    return deg * (Math.PI/180)
}

export default function PingLocation () {
    const [userLong,setUserLong] = useState(0)
    const [userLat, setUserLat] = useState(0)
    const [closestStore,setClosestStore] = useState("")
    const success =async (position)=> {
        
            setUserLat(position?.coords?.latitude)
            setUserLong(position?.coords?.longitude)
           
            var shortestDist = Number.MAX_SAFE_INTEGER;
                try {
                    const allStores = await axios.get("/api/getAllStores")
                    const storeArr = await allStores.data
                    
                    
                        for(var i =0;i< storeArr?.length;i++) {
                            if(storeArr) {
                            var currentDist = getDistanceFromLatLonInKm(userLat,userLong, storeArr[i]?.latitude, storeArr[i]?.longitude);
                            if(currentDist < shortestDist){
                                shortestDist = currentDist;
                               
                                setClosestStore(storeArr[i].address);  
                              }
                            
                            }
                            
                        }
        
                    
                    
                // console.log(closestStore)
                } catch (error) {
                    console.log(error)
                }
            }

    const error = ()=> {
        console.log("err")
      }

    const getCoords= ()=> {
        if(navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(success,error);
        }
    }
    
    
    useEffect(()=> {
        getCoords()
    },[userLat,userLong])  

    return (
        <div onClick={getCoords} className="rounded-full bg-importantRed cursor-pointer h-56 w-56 flex flex-col gap-2 items-center justify-center md:row-start-3 md:row-end-4 md:col-start-2 md:col-end-3">
            <h3 className="text-xl font-black">closest store to you:</h3>
            {closestStore}
        </div>
    )

}