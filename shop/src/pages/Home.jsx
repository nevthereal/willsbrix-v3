import React from 'react'
import Panel from '../components/Panel'
import {products} from '../productList'
import Banner from '../assets/wb_banner.png'


const Home = () => {
  return (
    <div>
        <div style={{backgroundImage: `url(${Banner})`}} id="header" className="text-center bg-no-repeat bg-center bg-cover mt-4 transition-all w-full h-[92vh] bg-white">
        <div className="h-full w-full bg-gray-800/25 dark:bg-black/70"></div>
        <p className="absolute top-[40vh] text-4xl md:text-6xl font-black text-white tracking-wide bg-cover w-full">
        <span className='uppercase'>WILL'S Brix</span> <br />
        <span className="text-base md:text-lg">LEGO® MOCs from Switzerland!</span><br />
        <div className='text-base bg-orange-400 border-2 rounded- border-orange-600 max-w-fit mx-8 md:mx-auto my-8 p-3 rounded-2xl'>
          <h2 className='text-2xl'>Summer Sale!</h2>
          <p>30% Off all products with Code "SUMMER30"! Valid until July 31</p>
        </div>
        <button className="border border-gray-400 py-1 px-2 rounded-lg hover:scale-105 duration-200"><a href="#featured"><p className='font-bold text-xl sm:text-2xl'>Explore!</p></a></button>
        </p>
    </div>
    <div id="featured">
        <h1 className="text-3xl font-bold uppercase my-4">Featured:</h1>
        <div className="flex justify-center gap-4 flex-wrap">
          <Panel link={`/products/${products[2].link}`} image={products[2].img_main} title={products[2].title} price={products[2].price} />
          <Panel link={`/products/${products[3].link}`} image={products[3].img_main} title={products[3].title} price={products[3].price} />
          <Panel link={`/products/${products[4].link}`} image={products[4].img_main} title={products[4].title} price={products[4].price} />
        </div>
    </div>
    <div className='py-8'>
    </div>
    </div>
  )
}

export default Home