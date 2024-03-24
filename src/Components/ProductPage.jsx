'use client';
import  axios  from "axios"
import { useState,useEffect } from "react";
import Image from 'next/image'
import {motion} from 'framer-motion'
import NavBar from "./NavBar";



const ProductPage = ({category}) => {
    const [products,setProducts] = useState([])
    const [priceId,setPriceId] = useState("")

  

    const ProductComponent = ({name,price,image,priceId}) => {

        const handlePurchase = async(e) => {
            e.preventDefault()
            try {
                const {data} = await axios.post('/api/Payment',
            {priceId:priceId},
            {headers:{'Content-Type': 'application/json', 'Authorization': `Bearer sk_test_51OxreCEx9wVxFjDOw60GkirBHdA5tRF1oiwtvxChTyEmn7t50V4g9hjDmczp43O0nJIvHvwzmKIBnRyYuOkywAoL00r4HESqTd`}}
            )
            window.location.assign(data);
            } catch (error) {
                console.error(error)
            }
            
        }

        return (
            <motion.div whileHover={{scale:1.2, cursor:"pointer", transition:{duration:0.5}}} 
             className="grid grid-rows-4 h-80 w-80 border-2 rounded-lg border-lightPink">
            <div  className="row-start-1 row-end-4 h-full rounded-t-lg overflow-hidden">
                <Image alt={name} src={image} width={400} height={400} className="h-full w-full" />
            </div>
    
           <div className="flex justify-between items-center p-2"> 
           <div className="row-start-4 row-end-5 uppercase flex-col justify-center items-start  ">
                <h3>{name}</h3>
                <div className="flex items-center justify-start gap-4 text-lightPink">
                <h3 className=""><s>${Math.trunc(price*1.2)}</s></h3>
                <h3 className="">${price}</h3>
                </div>
            </div>
    
            <button onClick={handlePurchase} className="rounded-xl h-16 w-16 bg-importantRed z-30">buy now</button>
           </div>
    
        </motion.div>
    
        )
    }

    const getAllProducts =async () => {
         const data = await axios.get('/api/getAllGroceries')
         const productData = await data.data;
        
         var tempProducts = [];
         for(var i =0;i< productData.length;i++ ) {
            if(productData[i].category ==category) {
                tempProducts.push(productData[i])
            }     
         }
       
         setProducts(tempProducts)
       
    }


    useEffect(()=> {
        getAllProducts()
    },[])

   

    return (
        <>
        <NavBar/>
        <div className="min-h-screen gap-12 flex-col justify-around items-center  bg-darkGrey text-white">
            <div className="row-start-1 row-end-2 grid grid-rows-1 grid-cols-3 place-items-center justify-center ">
            <h1 className="text-4xl md:text-8xl row-start-1 row-end-2 uppercase col-start-1 col-end-4 z-10">{category}</h1>
            <section className="bg-importantRed h-48 w-48 rounded-full row-start-1 row-end-2 col-start-1 col-end-4 "></section>
            </div>
        
            <div className="min-h-screen grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-y-4  w-full justify-items-center mt-8">
            
            {products.map((p,key)=> {
                return (
                    <ProductComponent key={key} name={p.name} price={p.price} image={p.image} priceId={p.priceId}/>
                )
            })}
        </div>
        </div>
        </>
    )
}
export default ProductPage