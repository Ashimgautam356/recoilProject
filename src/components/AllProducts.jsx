import React from 'react'
import { productsAtom } from '../store/recoilStore'
import { useRecoilValue } from 'recoil'
import { Link } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'

const AllProducts = () => {
    useFetch('https://fakestoreapi.com/products/')
    const allProducts = useRecoilValue(productsAtom())
    console.log(allProducts)
  return (
    <div className='border border-red-700 grid grid-cols-4 grid-rows-5 w-full gap-4 pr-4 pl-4 font-primary'>
        {
            allProducts?.map(product=>{
                return(
                    <div className='border py-2 col-span-1 row-span-1  border-blue-700 w-full h-full flex  flex-col justify-between items-center group cursor-pointer' key={product.id}>
                        <div className='relative w-[80%] h-[60%]  '>
                            <Link to={`/${product.id}`}>
                            <img src={product.image} alt={product.title} className='w-full h-full object-contain object-center'/>
                            </Link>
                        </div>
                        <div className="hidden border border-red-700 h-[30%] group-hover:flex group-hover:flex-col w-[80%] justify-center items-center relative transition-all duration-300 ">
                            <p>{product.title}</p>
                            <p>{product.price}$</p>
                            <Link className='underline' to={`/${product.id}`} >Shop Now</Link>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default AllProducts