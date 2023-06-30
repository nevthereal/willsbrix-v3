import React from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Products from "./components/Products";
import Info from "./components/Info";
import ProductPage from "./components/Product"

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
          img_main={require('./assets/ag_front.png')}
          img_2={require('./assets/ag_back.png')}
          img_3={require('./assets/original/ig-11.png')}
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
         img_main={require('./assets/ab_front.png')}
         img_2={require('./assets/ab_back.png')}
         img_3={require('./assets/original/ig-88.png')}
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
        img_main={require('./assets/atrt.png')}
        img_2={require('./assets/atrt_back.png')}
        img_3={require('./assets/original/at-rt.png')}
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
         img_main={require('./assets/barc_speeder.png')}
         img_2={require('./assets/barc_speeder_side.png')}
         img_3={require('./assets/original/barc speeder.png')}
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
         img_main={require('./assets/crab droid.png')}
         img_2={require('./assets/crab droid_back.png')}
         img_3={require('./assets/original/crab droid.png')}
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
         img_main={require('./assets/droideka.png')}
         img_2={require('./assets/droideka_side.png')}
         img_3={require('./assets/original/droideka.png')}
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
         img_main={require('./assets/swampspeeder_front.png')}
         img_2={require('./assets/swampspeeder_back.png')}
         img_3={require('./assets/original/swampspeeder.png')}
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
         img_main={require('./assets/rancor.png')}
         img_2={require('./assets/rancor_side.png')}
         img_3={require('./assets/original/rancor.png')}
         />}
        /> 
      </Routes>
      <Footer />
    </>
  );
}

export default App;
