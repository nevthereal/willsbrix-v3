import React, { useContext, useState } from 'react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceSmileWink, faSpinner, faXmark } from '@fortawesome/free-solid-svg-icons'

import Backdrop from './Backdrop'
import CartItem from './CartItem'

import { CartContext } from "../cartContext"

const fadeIn = {
  hidden: {
    opacity: 0
  }, visible: {
    opacity: 1
  }, exit: {
    opacity: 0
  }
}



const Cart = ({ handleClose }) => {

  const cart = useContext(CartContext)
  const [isLoading, setIsLoading] = useState(false)
  const [twoSec, setTwoSec] = useState(false)
  
  const checkout = async () => {
    try {
      setIsLoading(true)
      const response = await fetch(`${import.meta.env.VITE_CHECKOUT_DOMAIN}/checkout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ items: cart.items })
      })
  
      const { url } = await response.json()
  
      if (url) {
        window.location.href = url
        localStorage.removeItem('cartProducts');
      }
    } catch (error) {
      alert("Couldn't connect to the server. Try again later")
    } finally {
      setIsLoading(false)
    }

  }

  if(isLoading === true){
    setTimeout(setTwoSec, "2 seconds")
  }
  

  return (
    <div>
        <Backdrop handleClose={handleClose}>
            <motion.div 
                onClick={(e) => e.stopPropagation()}
                className='w-[90%] h-fit max-h-[75%] bg-white dark:bg-gray-800 p-10 m-auto rounded-2xl overflow-auto z-[1] max-w-6xl'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                variants={fadeIn}
            >
              <div className='flex justify-between'>
                <h1 className='font-bold text-4xl'>Your Cart:</h1>
                <FontAwesomeIcon className='cursor-pointer text-xl' icon={faXmark} onClick={handleClose} />
              </div>
              <div className='flex flex-col gap-4 my-4'>
                {cart.items.length === 0 ? 
                <p className='text-xl'>There are no items in your cart. <a href="/products" className='font-bold'>Explore Products</a></p>
                :
                <>
                {cart.items.map((currentProduct, index) => (
                  <CartItem key={index} item={currentProduct} />
                ))}
                </>
                }
              </div>
              
              {cart.items.length > 0 ? 
              <>
                <p className='font-semibold text-sm'>Subtotal: {cart.getSubTotal().toFixed(2)} CHF</p>
                <button className='border border-gray-400 py-1 px-2 rounded-lg hover:scale-105 duration-200 text-xl font-bold mt-2' onClick={checkout}>{isLoading ? <span className='cursor-wait'>Loading <FontAwesomeIcon icon={faSpinner} spin /></span> : <span>Checkout</span>}</button>
              </> 
              :
              null}
              {twoSec ? <p className='italic'>Sometimes server requests can take a little longer. If so, be patient <FontAwesomeIcon icon={faFaceSmileWink} /></p> : null}
            </motion.div>
        </Backdrop>
    </div>
  )
}

export default Cart