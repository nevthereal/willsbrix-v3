import React from 'react'

import {products} from '../../productList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-regular-svg-icons'

const CartItem = () => {

  return (
    <div className='w-full border-gray-300 bg-gray-200 text-left rounded-xl py-4 px-4 max-w-5xl mx-auto'>
      <div className='flex gap-4'>
        <img src={products[5].img_main} alt={products[5].title} className='h-24 w-24 rounded-xl' />
          <div className='flex justify-between my-auto'>
            <div>
              <h1 className='text-3xl font-bold text-left'>{products[5].title}</h1>
              <p className='text-left font-semibold text-gray-600'>{products[5].price} CHF</p>
            </div>
            <FontAwesomeIcon icon={faTrashCan} className='text-2xl my-auto' />
          </div>
        </div>
    </div>
  )
}

export default CartItem