import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import { Navbar } from "react-bootstrap";
import React, { useState } from 'react';
 

function App() {
  const [theme, setTheme] = useState(() => {
    const mode = JSON.parse(localStorage.getItem('mode'));
    return mode|| "light"; 
  });
  const switchTheme = () => {
    setTheme((cur) => {
const newTheme = cur === "light" ? "dark" : "light";
  localStorage.setItem("mode", JSON.stringify(newTheme));
  return newTheme;
    });
  };
  console.log(theme, "theme");
  return (
    
   <div>

<div className="wrapper" id={theme}>
      <div className="toggle-container">

        <p className="change-text">{theme} mode</p>
        <input onChange={switchTheme} type="checkbox" id="toggle-btn" />
        <label htmlFor="toggle-btn" className="toggle-label"></label>
      <container id="Stasik">
     <div id="reveal-text">
  AirDrop
</div>
     </container>
  
     <container>
        <Navbar><nav>
        <div className='drop'>
        <a href="https://t.me/herewalletbot/app?startapp=1812824" class="testing">NEAR Wallet</a>
        </div>
  
        <div className='drop'>
        <a href="https://t.me/hotonnear_chat" class="testing">HOT Chat</a>
        </div>
        <div className='drop'>
        <a href="https://web.telegram.org/k/#@memefi_coin_bot" class="testing">Memeficlub</a>
        </div>
        <div className='drop'>
        <a href="https://t.me/memeficlub" class="testing">Memeficlub Chat</a>
        </div>
        <div className='drop'>
        <a href="https://t.me/theYescoin_bot/Yescoin?startapp=rhZtnC" class="testing">Yescoin</a>
        </div>
        <div className='drop'>
        <a href="https://t.me/herewalletbot/app?startapp=1812824" class="testing">HOT Wallett</a>
        </div>
        <div className='drop'>
        <a href="https://t.me/memefi_coin_bot?start=r_1238b2973b" class="testing">MemeFi Coin</a>
        </div>
        <div className='drop'>
        <a href="https://t.me/fueljetton_bot/app?startapp=2073153774" class="testing">Fuel Mining</a>
        </div>
        <div className='drop'>
        <a href="https://t.me/Gleam_AquaProtocol_Bot/app?startapp=cmM9NWY4YzJmOTM" class="testing">GLEAM</a>
        </div>
        <div className='drop'>
        <a href="https://t.me/catizenbot/gameapp?startapp=r_3_1668952" class="testing">Catizen</a>
        </div>
        <div className='drop'>
        <a href="https://t.me/BullApp_bot?start=2073153774_2851" class="testing">Mine Bull</a>
        </div>
        <div className='drop'>
        <a href="https://t.me/Bodypump_app_bot?start=26dc1b48-a074-43b9-9551-b248676b60d7
" class="testing">BodyPump</a>
        </div>
        <div className='drop'>
        <a href="https://t.me/dotcoin_bot?start=r_2073153774_1002138503845" class="testing">Dotcoin</a>
        </div>
        <div className='drop'>
        <a href="https://t.me/tapswap_mirror_bot?start=r_2073153774" class="testing">TapSwap</a>
        </div>
        <div className='drop'>
        <a href="https://t.me/vertus_app_bot/app?startapp=2073153774" class="testing">Vertus</a>
        </div>
        <div className='drop'>
        <a href="https://t.me/holdwallet_bot/app?startapp=HW665I4R5YF1" class="testing">HOLD WALLET</a>
        </div>
        <div className='drop'>
        <a href="https://t.me/pixel_wallet_bot?start=7192352961" class="testing">Pixel Wallet</a>
        </div>
      </nav></Navbar>
        </container>
          
        <container>
   
   <footer>
    <div id="fot">
      AirDrop BMP<span>2024</span> 
    </div>
   </footer>
   </container>

    </div>

 
</div>
</div>
  );
}


export default App;
