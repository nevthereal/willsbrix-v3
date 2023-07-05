import React from 'react'
import { CartContext } from "../cartContext"
import { useContext } from 'react'

const Template = ({ title, price, description, parts, blPrice, img_main, img_1, img_2, designer, id }) => {
  
  const cart = useContext(CartContext)
  const inCart  = cart.isInCart(id)

  return (
    <div>
        <div className="productContainer">
        <img src={img_main} alt="" className="productImageMain" />
        <div className="my-auto">
          <h1 className="productTitle">{title} - Instructions only</h1>
          <div className="productDescContainer">
          {!inCart ? 
            <button onClick={() => cart.addOneToCart(id)}>CHF {price} Add to cart</button>
            :
            <button onClick={() => cart.removeFromCart(id)}>Remove from Cart</button>
          }
          
          </div>
          <h2 className="productH2">Short description:</h2>
          <p className="text-sm md:text-lg m-4">Designed by {designer} <br /> {description}</p>
          <h2 className="productH2">Details:</h2>
          <ul className="productList">
              <li>{parts} Parts</li>
              <li>Bricklink price: ~{blPrice} CHF</li>
          </ul>
        </div>
    </div>
    <div id="gallery">
        <h2 className="productH2">Gallery:</h2>
        <div className="productGalleryFlex"> 
            <img className="productGalleryImage" src={img_main} alt="" />
            <img className="productGalleryImage" src={img_1} alt="" />
            <img className="productGalleryImage" src={img_2} alt="" />
        </div>
    </div>
    </div>
  )
}

export default Template