import React from 'react'
import Barcspeeder from '../assets/barc_speeder.png'
import Atrt from '../assets/atrt.png'
import Crabdroid from '../assets/crab droid.png'
import Banner from '../assets/wb_banner.png'


const Home = () => {
  return (
    <div>
        <div style={{backgroundImage: `url(${Banner})`}} id="header" className="text-center bg-no-repeat bg-center bg-cover mt-4 transition-all w-full h-[92vh] bg-white">
        <div className="h-full w-full bg-black/25"></div>
        <p className="absolute top-[40vh] text-4xl md:text-6xl font-black text-white uppercase tracking-wide bg-cover w-full">
        WILL'S Brix <br />
        <span className="text-base md:text-lg">LEGO® MOC's from Switzerland!</span><br />
        <button className="border border-gray-400 py-1 px-2 rounded-lg hover:scale-105 duration-200"><a href="#featured"><p className='font-bold text-xl sm:text-2xl'>Explore!</p></a></button>
        </p>
    </div>
    <div id="featured">
        <h1 className="text-3xl font-bold uppercase my-4">Featured:</h1>
        <div className="flex justify-center gap-4 flex-wrap">
            <div className="border border-gray-300 bg-gray-200 rounded-2xl w-9/12 md:w-auto p-4 hover:scale-105 duration-200 mx-auto md:mx-0">
                <a href="products/barc-speeder">
                    <img className="p-2 w-96 mx-auto rounded-3xl" src={Barcspeeder} alt="at-rt" />
                    <p className="mb-4 font-bold text-2xl text-center">BARC Speeder</p>
                    <p className="text-gray-700 font-bold">7.50 CHF</p>
                </a>
            </div>
            <div className="border border-gray-300 bg-gray-200 rounded-2xl w-9/12 md:w-auto p-4 hover:scale-105 duration-200 mx-auto md:mx-0">
                <a href="products/at-rt">
                    <img className="p-2 w-96 mx-auto rounded-3xl" src={Atrt} alt="at-rt" />
                    <p className="mb-4 font-bold text-2xl text-center">AT-RT Walker</p>
                    <p className="text-gray-700 font-bold">5 CHF</p>
                </a>
            </div>
            <div className="border border-gray-300 bg-gray-200 rounded-2xl w-9/12 md:w-auto p-4 hover:scale-105 duration-200 mx-auto md:mx-0">
                <a href="products/crab-droid">
                    <img className="p-2 w-96 mx-auto rounded-3xl" src={Crabdroid} alt="at-rt" />
                    <p className="mb-4 font-bold text-2xl text-center">Crab Droid</p>
                    <p className="text-gray-700 font-bold">3 CHF</p>
                </a>
            </div>
        </div>
    </div>
    <div className='py-8'>
    <iframe className='mx-auto w-9/12 rounded-xl shadow-2xl shadow-black/60 md:w-[600px] md:h-[337.50px]' src="https://www.youtube.com/embed/IYwqq5MYuGU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    </div>
  )
}

export default Home