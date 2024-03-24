'use client';
import {motion, AnimatePresence} from 'framer-motion'
import { ArrowDownIcon } from '@heroicons/react/24/solid'
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
        <div className="grid h-screen grid-rows-3 grid-cols-2 place-items-center">
            <div className=''>
                <h3 className='text-6xl '>empowering tomorrow's food today.</h3>
            </div>
            <section className='bg-importantRed w-72 h-72 rounded-full ' ></section>
            <div className='w-full row-start-3 row-end-4 col-start-1 col-end-3 flex justify-between '>
                <section className='w-1/2'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </section>
                
                    <section className=''>
                        <ArrowDownIcon  className='text-importantRed h-24 w-14'/>
                    </section>
            </div>

        </div>
    )
}
export default Hero