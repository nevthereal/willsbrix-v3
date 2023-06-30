import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagramSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <div>
        <div className="bg-black text-white py-4 mt-8">
        <p className="text-xl md:text-lg font-bold uppercase">©Neville Brem and William Tang</p>
        <div className="flex w-16 justify-center mx-auto my-4 text-4xl md:2xl space-x-2">
            <a href="https://instagram.com/willsbrixlego_official" target="_blank" rel="noreferrer noopener"><FontAwesomeIcon icon={faInstagramSquare} /></a>
            <a href="https://twitter.com/willsbrix" target="_blank" rel="noreferrer noopener"><FontAwesomeIcon icon={faTwitterSquare} /></a>
            <a href="mailto:support@willsbrix.com"><FontAwesomeIcon icon={faEnvelopeSquare} /></a>
        </div>
    </div>
    </div>
  )
}

export default Footer