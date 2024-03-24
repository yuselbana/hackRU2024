'use client';
import {motion, AnimatePresence} from 'framer-motion'
import { ArrowDownIcon } from '@heroicons/react/24/solid'
import PingLocation from "@/Components/PingLocation";
const circleAnimation = {
    initial: {
        x:-20
    },
    animate: {
        x:20,
        transition: {
            repeat:Infinity, 
            repeatType:"reverse",
            duration:1
        }
    }
}


const Hero = () => {
    return (
        <div id="home" className="grid min-h-screen grid-rows-3 grid-cols-2 place-items-center">
            <div className='row-start-1 text-center row-end-3 col-span-full'>
                <h3 className='text-6xl '>empowering tomorrow&apos;s food today.</h3>
            </div>
        
            <PingLocation/>
            <div className='w-full row-start-3 row-end-4 col-start-1 col-end-3 flex justify-around items-center '>
                <section className='w-1/2'>
                <p>welcome to RUSHOP, the ultimate destination for affordable groceries and unparalleled convenience. We understand that time is precious, which is why we optimize yours by finding
                     a grocery store near you and at a price that can&apos;t be beaten! Say farewell to the hassle of scouring the internet for your essential groceries!</p>
                </section>
                
                    <section className='flex justify-center items-center'>
                        <ArrowDownIcon  className='text-importantRed h-24 w-14'/>
                    </section>
            </div>

        </div>
    )
}
export default Hero