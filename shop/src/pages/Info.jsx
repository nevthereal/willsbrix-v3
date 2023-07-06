import React from 'react'

const Info = () => {
  return (
    <div className='py-8 px-10 md:px-60'>
      <h1 className='text-4xl md:text-6xl font-black uppercase my-8'>Info</h1>
      <div className='my-6'>
          <h1 className='text-xl md:text-2xl font-bold'>About us</h1>
          <p className="md:text-xl">
            Me (Neville Brem) and William Tang are two students from Switzerland, who love to build and design LEGO models. In Summer 2022, we came up with the idea to sell our designs as instructions. William designed most of the sets, while I was busy building this site and processing all the orders.
          </p>
      </div>
      <div className='my-6'>
          <h1 className='text-xl md:text-2xl font-bold'>Checkout Process</h1>
          <p className="md:text-xl">
            Our prices are in Swiss Franc (CHF), because we are a Switzerland-based company. After purchasing our products, we will send you the instructions, as well as the part list (for e.g. <a href='https://bricklink.com' className='font-bold'>Bricklink</a>) to your email adress you provide when checking out. Your payments are securely managed by <a href="https://stripe.com" className='font-bold'>Stripe</a>.
          </p>
      </div>

      <h1 className='text-4xl md:text-6xl font-black uppercase my-8'>Contact</h1>
      <p className="md:text-xl my-1">Contact us via Email: <a className="font-bold" href="mailto:support@willsbrix.com">support@willsbrix.com</a></p>
      <p className="md:text-xl my-1">Send us a DM on Twitter: <a className="font-bold" href="https://twitter.com/willsbrix">@willsbrix</a></p>
      <p className="md:text-xl my-1">Follow us on Instagran: <a className="font-bold" href="https://instagram.com/willsbrixlego_official">@willsbrixlego_official</a></p>
    </div>
  )
}

export default Info