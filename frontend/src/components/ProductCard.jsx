import React from 'react'
import productCard from '../assets/productCard/product2.png'
const ProductCard = ({product}) => {
  return (
    <div className='w-[300px] h-[360px]  rounded-lg'>
      <div className='w-[300px] h-[320px]'>
        <img className='w-[300px] h-[320px] bg-cover bg-center rounded-t-lg' src={productCard} alt="" />
      </div>
      <div className='text-sm h-[40px] flex justify-between items-center px-2 font-bold text=[#223531]'>
        <div>{product.name}</div>
        <div>LKR.{product.price}</div>
      </div>
    </div>
  )
}

export default ProductCard
