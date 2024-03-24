import Image from 'next/image'
const CategoryComponent = ({title,image}) => {
    return(
        <div className='bg-red-500 h-1/2 w-1/2 rounded-xl '>
            <h1>{title}</h1>
            <Image src={image}/>
        </div>

    )
}


const CategoryPage = () => {
    return (
        <div className='min-h-screen flex flex-wrap gap-6 p-6'>
            <CategoryComponent title={"cat"}/>
            <CategoryComponent title={"cat"}/>
            <CategoryComponent title={"cat"}/>
          
            
            <CategoryComponent title={"cat"}/>
            <CategoryComponent title={"cat"}/>
            <CategoryComponent title={"cat"}/>
        </div>
    )
}

export default CategoryPage