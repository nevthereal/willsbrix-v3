import React from 'react'

const Template = ({ title, addToCart, price, description, parts, blPrice, img_main, img_1, img_2, designer }) => {


  return (
    <div>
        <div className="productContainer">
        <img src={img_main} alt="" className="productImageMain" />
        <div className="my-auto">
          <h1 className="productTitle">{title} - Instructions only</h1>
          <div className="productDescContainer">
          <a href={addToCart} className="productATCOutline"><p className="productATC">{price} CHF - Add to cart</p></a>
          </div>
          <h2 className="productH2">Short description:</h2>
          <p className="text-sm md:text-lg mb-4">Designed by {designer} <br /> {description}</p>
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