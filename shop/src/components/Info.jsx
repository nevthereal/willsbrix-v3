import React from 'react'


const heading = `text-4xl md:text-6xl font-black uppercase my-8`
const underheading = `text-xl md:text-2xl font-bold`
const divisionInfo = `my-6`

const Info = () => {
  return (
    <div className='py-8 px-10 md:px-60'>
      <h1 className={heading}>Info</h1>
      <div className={divisionInfo}>
          <h1 className={underheading}>About us</h1>
          <p className="md:text-xl">
            Me, Neville Brem and William Tang are two students from Switzerland, who love to play and design with LEGO. In 2022, we came up with the idea to sell our designs as instructions.
            William designed most of the sets, while I was busy building this site and processing all the orders.
          </p>
      </div>
      <div className={divisionInfo}>
          <h1 className={underheading}>Buying Process</h1>
          <p className="md:text-xl">
            Our prices are in Swiss Franc (CHF), because we are a Switzerland-based company. After purchasing our products, we will send you the instructions, as well as the part list (for e.g. <a href='https://bricklink.com' className='font-bold'>Bricklink</a>)
            To your email adress of your Paypal Account.
            You can Pay with Paypal or with Credit Card.
          </p>
      </div>

      <h1 className={heading}>Contact</h1>

      <div>
          <h1 className={underheading}>Email</h1>
          <p className="md:text-xl">Contact us via Email: <a className="font-bold" href="mailto:support@willsbrix.com">support@willsbrix.com</a></p>
      </div>
      <br />
      <div>
          <h1 className={underheading}>Twitter</h1>
          <p className="md:text-xl">Send us a DM on Twitter: <a className="font-bold" href="https://twitter.com/willsbrix">@willsbrix</a></p>
      </div>
      <br />
      <div>
          <h1 className={underheading}>Instagram</h1>
          <p className="md:text-xl">Follow us on Instagran: <a className="font-bold" href="https://instagram.com/willsbrixlego_official">@willsbrixlego_official</a></p>
      </div>
    </div>
  )
}

export default Info