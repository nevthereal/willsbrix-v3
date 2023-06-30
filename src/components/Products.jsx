import React from 'react'
import Panel from './Panel'
import {images} from '../images'

const Products = () => {
  return (
    <div>
        <h1 className='text-4xl md:text-6xl font-black uppercase my-16'>Products</h1>
    <div id="products" className="flex justify-center gap-4 flex-wrap my-4 2xl:max-w-[90%] mx-auto">
        <Panel link={"/products/at-rt"}         image={images.at_main}            title={"AT-RT Walker"}              price={"5 CHF"} />
        <Panel link={"/products/barc-speeder"}  image={images.bs_main}     title={"BARC Speeder"}              price={"7.50 CHF"} />
        <Panel link={"/products/crab-droid"}    image={images.cd_main}       title={"Crab Droid"}                price={"3.50 CHF"} />
        <Panel link={"/products/rancor"}        image={images.rc_main}          title={"Rancor - Minifig Scale"}    price={"20 CHF"} />
        <Panel link={"/products/droideka"}      image={images.dd_main}        title={"Droideka"}                  price={"3 CHF"} />
        <Panel link={"/products/assassin-gray"} image={images.ag_main}              title={"Gray Assassin Droid"}       price={"2 CHF"} />
        <Panel link={"/products/assassin-black"}image={images.ab_main}              title={"Black Asssassin Droid"}     price={"2 CHF"} />
        <Panel link={"/products/swamp-speeder"} image={images.ss_main}    title={"Swampspeeder"}              price={"10 CHF"} />
    </div>
    </div>
  )
}

export default Products