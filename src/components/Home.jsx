import React from 'react'
import Panel from './product/Panel'
import {images} from '../context'
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
            <Panel link={"/products/at-rt"}                 image={images.at_main}            title={"AT-RT Walker"}              price={"5 CHF"} />
            <Panel link={"/products/barc-speeder"}          image={images.bs_main}            title={"AT-RT Walker"}              price={"5 CHF"} />
            <Panel link={"/products/crab-droid"}            image={images.cd_main}            title={"AT-RT Walker"}              price={"5 CHF"} />
        </div>
    </div>
    <div className='py-8'>
    </div>
    </div>
  )
}

export default Home