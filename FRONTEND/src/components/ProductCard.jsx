import React from 'react'

const ProductCard = () => {
  return (
      <div className='shadow-raised max-w-50 rounded-sm overflow-hidden space-y-3 pb-4'>
          <div className='object-cover'>
              <img src="../../src/assets/images/curtain.jpeg" alt="" />
          </div>
          <div className='px-2'>
              <h1 className='text-responsive-small'>Surbhi print jhallar</h1>
              <h1 className='text-responsive-small font-semibold'>₹ 699</h1>
          </div>
      </div>
  )
}

export default ProductCard