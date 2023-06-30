import React from 'react'
import Ab from '../assets/ab_front.png'
import Ag from '../assets/ag_front.png'
import Atrt from '../assets/atrt.png'
import Barcspeeder from '../assets/barc_speeder.png'
import Crabdroid from '../assets/crab droid.png'
import Rancor from '../assets/rancor.png'
import Swampspeeder from '../assets/swampspeeder_front.png'
import Droideka from '../assets/droideka.png'
import Panel from './Panel'

const Products = () => {
  return (
    <div>
        <h1 className='text-4xl md:text-6xl font-black uppercase my-16'>Products</h1>
    <div id="products" className="flex justify-center gap-4 flex-wrap my-4 2xl:max-w-[90%] mx-auto">
        <Panel link={"/products/at-rt"}         image={Atrt}            title={"AT-RT Walker"}              price={"5 CHF"} />
        <Panel link={"/products/barc-speeder"}  image={Barcspeeder}     title={"BARC Speeder"}              price={"7.50 CHF"} />
        <Panel link={"/products/crab-droid"}    image={Crabdroid}       title={"Crab Droid"}                price={"3.50 CHF"} />
        <Panel link={"/products/rancor"}        image={Rancor}          title={"Rancor - Minifig Scale"}    price={"20 CHF"} />
        <Panel link={"/products/droideka"}      image={Droideka}        title={"Droideka"}                  price={"3 CHF"} />
        <Panel link={"/products/assassin-gray"} image={Ag}              title={"Gray Assassin Droid"}       price={"2 CHF"} />
        <Panel link={"/products/assassin-black"}image={Ab}              title={"Black Asssassin Droid"}     price={"2 CHF"} />
        <Panel link={"/products/swamp-speeder"} image={Swampspeeder}    title={"Swampspeeder"}              price={"10 CHF"} />
    </div>
    </div>
  )
}

export default Products