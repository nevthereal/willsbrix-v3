import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCcVisa, faCcMastercard, faCcApplePay, faGooglePay, faCcAmex } from '@fortawesome/free-brands-svg-icons'

const Info = () => {
  return (
    <div className='py-8 px-10 md:px-60'>
      <h1 className='text-4xl md:text-6xl font-black uppercase my-8'>Info</h1>
      <div className='my-6'>
          <h1 className='text-xl md:text-2xl font-bold'>About us</h1>
          <p className="md:text-xl">
            Me (Neville Brem) and William Tang are two students from Switzerland, who love to build and design LEGO models. In Summer 2022, we came up with the idea to sell our designs as instructions. William designed most of the sets, while I was busy building this site and processing all the orders. For the moment we only sell instructions, but we plan to change that within this or next year!
          </p>
      </div>
      <div className='my-6'>
          <h1 className='text-xl md:text-2xl font-bold'>Checkout Process</h1>
          <p className="md:text-xl">
            Your Checkouts are securely managed by <a href="https://stripe.com" className='font-bold'>Stripe</a>. When checking out, make sure to provide your email adress, you want us to send the instructions and part list (e. g. for <a href='https://bricklink.com' className='font-bold'>Bricklink</a>) to. After checking out you will receive said items as soon as possible.
          </p>
      </div>
      <div className='my-6'>
          <h1 className='text-xl md:text-2xl font-bold'>Payment methods</h1>
          <p className="md:text-xl">
            Our payments are in CHF (Swiss Franc), because we are a Switzerland-based company. We accept the following payment methods:
            <div className="flex justify-center text-4xl gap-4 my-2">
            <FontAwesomeIcon icon={faCcVisa} />
            <FontAwesomeIcon icon={faCcMastercard} />
            <FontAwesomeIcon icon={faCcApplePay} />
            <FontAwesomeIcon icon={faCcAmex} />
            <FontAwesomeIcon icon={faGooglePay} />
            </div>
          </p>
      </div>

      <h1 className='text-4xl md:text-6xl font-black uppercase my-8'>Contact</h1>
      <p className="md:text-xl my-1">Send us an Email: <a className="font-bold" href="mailto:support@willsbrix.com">support@willsbrix.com</a></p>
      <p className="md:text-xl my-1">Send us a direct message on Twitter: <a className="font-bold" target='_blank' href="https://twitter.com/willsbrix">@willsbrix</a></p>
      <p className="md:text-xl my-1">Follow us on Instagran: <a className="font-bold" target='_blank' href="https://instagram.com/willsbrixlego_official">@willsbrixlego_official</a></p>
    </div>
  )
}

export default Info