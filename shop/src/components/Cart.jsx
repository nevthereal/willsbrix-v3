import React, { useContext, useState } from 'react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

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

  const itemsAmt = cart.items.length

  const checkout = async () => {
    await fetch('http://localhost:4000/checkout', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({items: cart.items})
    }).then((response) => {
        return response.json();
    }).then((response) => {
        if(response.url) {
            window.location.assign(response.url);
        }
    }).catch((error) => {
      console.log(error)
    })
    console.log(cart.items)
  }

  return (
    <div>
        <Backdrop handleClose={handleClose}>
            <motion.div 
                onClick={(e) => e.stopPropagation()}
                className='w-[90%] h-fit max-h-[75%] bg-white p-10 m-auto rounded-2xl overflow-auto z-[1] max-w-6xl'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                variants={fadeIn}
            >
              <div className='flex justify-between'>
                <h1 className='font-bold text-3xl'>Your Cart {itemsAmt === 0 ? <></> : <span>({itemsAmt} Items)</span>}:</h1>
                <FontAwesomeIcon className='cursor-pointer' icon={faXmark} onClick={handleClose} />
              </div>
              <div className='flex flex-col gap-4 my-4'>
                {cart.items.length === 0 ? 
                <p>There is nothing in your cart.</p>
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
                <p>Subtotal: {cart.getSubTotal().toFixed(2)} CHF</p>
                <button className='border border-gray-400 py-1 px-2 rounded-lg hover:scale-105 duration-200' onClick={checkout}>Checkout</button>
              </> 
              : 
              <></>}
            </motion.div>
        </Backdrop>
    </div>
  )
}

export default Cart