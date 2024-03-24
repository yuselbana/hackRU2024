'use client'
import { useSearchParams } from "next/navigation"
import ProductPage from "@/Components/ProductPage"
export default function Page() {
    const searchParams = useSearchParams()
    const category = searchParams.get('category')

    
  
    return (
        <div className="">
            <ProductPage category={category}/>
        </div>
    )
}