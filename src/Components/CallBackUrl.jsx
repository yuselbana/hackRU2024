'use client';
import {useState,useEffect} from 'react'
import {useRouter} from 'next/navigation';
import PacmanLoader from "react-spinners/PacmanLoader";

const CallBackUrl = ({validity}) => {
const [counter,setCounter] = useState(5)
const router = useRouter()
useEffect(()=> {
    setTimeout(()=>{
        setCounter(counter-1)
    },1000)

    if(counter == 0) {
        router.push('/')
    }
},[counter])


    return (
        <div className='h-screen grid place-items-center bg-greyBlack text-white bg-darkGrey'>
            <div className='flex flex-col items-center justify-center w-full lg:w-3/5 h-full gap-4 '>
            {validity == "success"
            ? 
            <>
            <h3 className='text-2xl lg:text-3xl'>Thank you for completing your order!</h3>
            <p>Redirecting in {counter}</p>
            <PacmanLoader size={40} color="#EF4444"/>
            </>
            :
            <>
            <h3 className='text-2xl lg:text-3xl' >There was an error in your form submission...</h3>
            <p>Please try again later</p>
            <p>Redirecting in {counter}</p>
            <PacmanLoader size={40} color="#EF4444"/>
            </>
        }
            </div>

        </div>
    )
}
export default CallBackUrl