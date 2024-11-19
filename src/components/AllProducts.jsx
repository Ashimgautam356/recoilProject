import React from 'react'
import { productsAtom } from '../store/recoilStore'
import { useRecoilValue } from 'recoil'
import { Link } from 'react-router-dom'

const AllProducts = () => {
    const allProducts = useRecoilValue(productsAtom())
  return (
    <div className='border border-red-700 grid grid-cols-4 w-full pr-4 pl-4 font-primary'>
        {
            allProducts.map(product=>{
                return(
                    <div className='border  border-blue-700 w-full flex flex-col justify-center items-center group cursor-pointer' key={product.id}>
                        <div className='w-[80%] h-[80%] border border-black '>
                            <Link to={`/${product.id}`}>
                            <img src={product.image} alt={product.title} className='w-full h-full object-contain object-center border border-green-800'/>
                            </Link>
                        </div>
                        <div className="hidden group-hover:flex flex-col justify-center items-center  relative">
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