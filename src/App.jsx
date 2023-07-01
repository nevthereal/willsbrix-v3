import React from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Products from "./components/Products";
import Info from "./components/Info";
import ProductPage from "./components/product/Product"

import {images} from './context'



function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/info" element={<Info />} />
        <Route path="/products/assassin-black" element={<ProductPage 
          title="Black Assassin Droid"  
          addToCart="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=JE4FAGYHTQQVA" 
          price="2" 
          designer="William"
          description="The Assassin Droid is ideal for hunting bounty or serving in a gang. It offers many details and is minifigure-scaled." 
          parts="25" 
          blPrice="~2.50" 
          img_main={images.ag_main}
          img_2={images.ag_1}
          img_3={images.ag_2}
          />} 
        />
        <Route path="/products/assassin-gray" element={<ProductPage
         title="Gray Assassin Droid"  
         addToCart="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=HC9LK2N8FJ5AY" 
         price="2" 
         designer="William"
         description="The Assassin Droid is ideal for hunting bounty or serving in a gang. It offers many details and is minifigure-scaled." 
         parts="25" 
         blPrice="~2.50" 
         img_main={images.ab_main}
         img_2={images.ab_1}
         img_3={images.ab_2}
          />}
        />
        <Route path="/products/at-rt" element={<ProductPage
        title="AT-RT Walker"  
        addToCart="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=8BEMJHHRBVJ7G" 
        price="5" 
        designer="William"
        description="This All-Terrain Recon Transporter is ideal for every MOC. Since it is not too big, you can build it multiple times and display or put it in your base or battle field! It is capable of holding a trooper and 2 weapons!" 
        parts="71" 
        blPrice="~6.50"
        img_main={images.at_main}
        img_2={images.at_1}
        img_3={images.at_2}
          />}
        />
        <Route path="/products/barc-speeder" element={<ProductPage
         title="BARC Speeder"  
         addToCart="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=J4PKAF4NKQB9E" 
         price="7.50" 
         designer="William"
         description="The BARC (Biker Advanced Recon Commando) Speeder are light and optimal to use them in quantity for your Mocs!" 
         parts="119" 
         blPrice="~18" 
         img_main={images.bs_main}
         img_2={images.bs_1}
         img_3={images.bs_2}
         />}
        />
        <Route path="/products/crab-droid" element={<ProductPage
         title="Crab Droid"  
         addToCart="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=GTA2WX6LF6SGQ" 
         price="3.50" 
         designer="William"
         description="The Crab Droid is an important part of the separatist droid army and was designed by the Techno-Union. It offers many details and is minifigure-scaled." 
         parts="78" 
         blPrice="~8" 
         img_main={images.cd_main}
         img_2={images.cd_1}
         img_3={images.cd_2}
         />}
        />
        <Route path="/products/droideka" element={<ProductPage
         title="Droideka"  
         addToCart="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=4WJH9VBUFW36E" 
         price="3" 
         designer="William"
         description="The high-detailed and minifig-scaled Droideka served in the droid army of the Seperatists in the clone wars. You can roll him up, like in the movies." 
         parts="35" 
         blPrice="~4" 
         img_main={images.dd_main}
         img_2={images.dd_1}
         img_3={images.dd_2}
         />}
        />
        <Route path="/products/swamp-speeder" element={<ProductPage
         title="Republic Swamp Speeder"  
         addToCart="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=7K7CSGSYGRZB6" 
         price="10" 
         designer="Neville"
         description="The Republic Swamp Speeder or Infantry Support Platform (short ISP) grants protection for your troops on Felucia or other planets. It is highly-detailed." 
         parts="104" 
         blPrice="~40" 
         img_main={images.ss_main}
         img_2={images.ss_1}
         img_3={images.ss_2}
         />}
        />
        <Route path="/products/rancor" element={<ProductPage
         title="Rancor"  
         addToCart="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=BGAMEEEH4KJ2U" 
         price="20" 
         designer="William"
         description="The horrifying Rancor, inspired by Star Wars Episode VI: Return of The Jedi, is minifig-scaled and inevitable for your next Jabba's Palace Build." 
         parts="392" 
         blPrice="~45 CHF" 
         img_main={images.rc_main}
         img_2={images.rc_1}
         img_3={images.rc_2}
         />}
        /> 
      </Routes>
      <Footer />
    </>
  );
}

export default App;
