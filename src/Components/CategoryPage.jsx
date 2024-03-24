import Image from 'next/image'
import Link from 'next/link'
const CategoryComponent = ({title,image}) => {
    return(
        <Link className='h-full w-full grid grid-rows-1 grid-cols-1 cursor-pointer rounded-3xl ' href={{pathname:`/${title}`,query:{category:title}}}>
        <div className='h-full w-full row-start-1 row-end-2 col-start-1 col-end-2'>
            <Image alt={`${title}`} width={400} height={400} className='h-full w-full rounded-3xl' src={image}/>
        </div>

        <div className='row-start-1 row-end-2 col-start-1 col-end-2 bg-[rgba(0,0,0,0.4)] backdrop-blur-sm h-full w-full z-10 flex items-center justify-center text-3xl'>
        <h1>{title}</h1>
        </div>
        </Link>

    )
}


const CategoryPage = () => {
    return (
        <div id="categories" className='flex-col items-center justify-between  p-12'>
            <h1 className='text-5xl'>
                Categories
            </h1>
        <div className='min-h-screen grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] p-4 md:p-12 gap-4'>
            
        
            <CategoryComponent title={"Produce"} image={"https://images.pexels.com/photos/5425894/pexels-photo-5425894.jpeg?auto=compress&cs=tinysrgb&w=800"}/>
            <CategoryComponent title={"Meat"} image={"https://images.pexels.com/photos/1927383/pexels-photo-1927383.jpeg?auto=compress&cs=tinysrgb&w=800 "}/>
            <CategoryComponent title={"Deli"} image={"https://images.pexels.com/photos/19239120/pexels-photo-19239120/free-photo-of-cheese-platter-snacks-and-white-wine-overhead.jpeg?auto=compress&cs=tinysrgb&w=800"}/>
            <CategoryComponent title={"Seafood"} image={"https://images.pexels.com/photos/2410606/pexels-photo-2410606.jpeg?auto=compress&cs=tinysrgb&w=800 "}/>
            <CategoryComponent title={"Dairy"} image={"https://images.pexels.com/photos/11363573/pexels-photo-11363573.jpeg?auto=compress&cs=tinysrgb&w=800"}/>
          
            </div>
            </div>
       
    )
}

export default CategoryPage