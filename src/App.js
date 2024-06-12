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
  AirDropBPM
</div>
     </container>

     <container id="Mining">
     <div id="reveal">
  Mining coin!
</div>
     </container>
  
     <container>
        <Navbar><nav>
        <div className='drop'>
        <img src="./545ebd1a-22c2-498e-8362-5413fb71b196.jpg"/>
        <div id='s'>
          
          
          
            <p>Total players:</p>
            <p id='d'>100 millions</p>
           
    
          
          </div>
        <a href="https://t.me/herewalletbot/app?startapp=1812824" class="testing">NEAR Wallet</a>
        <div id='flex'>
        <div id='tguser'>
      
    <p>TG users:</p>
  
  </div>
 
  <p id='min'>33.03 min</p>
  </div>
  <div id='xlex'>
        <div id='xusers'>
      
    <p>X users:</p>
  
  </div>
 
  <p id='min'>33.03 min</p>
  </div>
        </div>
  
        <div className='drop'>
        <img src="./06cec077-27be-4202-84cc-d7e644edd4da.jpg"/>
        <div id='s'>
          
          <div class="text-ex-tooltip">
          
            <p>Total players</p>
            <p id='d'>100 millions</p>
       
          
          </div>
          
          </div>
        <a href="https://t.me/hotonnear_chat" class="testing">HOT Chat</a>
        <div id='flex'>
        <div id='tguser'>
      
    <p>TG users:</p>
  
  </div>
 
  <p id='min'>33.03 min</p>
  </div>
  <div id='xlex'>
        <div id='xusers'>
      
    <p>X users:</p>
  
  </div>
 
  <p id='min'>33.03 min</p>
  </div>
        </div>
        <div className='drop'>
        <img src="./26f879be-2427-4951-bdcf-e8a3ff8f6e57.jpg"/>
        <div id='s'>
          
          <div class="text-ex-tooltip">
          
            <p>Total players</p>
            <p id='d'>100 millions</p>
          
          </div>
          
          </div>
        <a href="https://web.telegram.org/k/#@memefi_coin_bot" class="testing">Memeficlub</a>
        <div id='flex'>
        <div id='tguser'>
      
    <p>TG users:</p>
  
  </div>
 
  <p id='min'>33.03 min</p>
  </div>
  <div id='xlex'>
        <div id='xusers'>
      
    <p>X users:</p>
  
  </div>
 
  <p id='min'>33.03 min</p>
  </div>
        </div>
        <div className='drop'>
        <img src="./5ac5387e-0f69-404a-8cb2-301f1837617f.jpg"/>
        <div id='s'>
          
          <div class="text-ex-tooltip">
          
            <p>Total players</p>
            <p id='d'>100 millions</p>
           
          
          </div>
          
          </div>
        <a href="https://t.me/memeficlub" class="testing">Meme Chat</a>
        <div id='flex'>
        <div id='tguser'>
      
    <p>TG users:</p>
  
  </div>
 
  <p id='min'>33.03 min</p>
  </div>
  <div id='xlex'>
        <div id='xusers'>
      
    <p>X users:</p>
  
  </div>
 
  <p id='min'>33.03 min</p>
  </div>
        </div>
        <div className='drop'>
        <img src="./1b94c215-8a2c-4011-a69f-b81561dbcaf5.jpg"/>
        <div id='s'>
          
          <div class="text-ex-tooltip">
          
            <p>Total players</p>
            <p id='d'>100 millions</p>
          
          
          </div>
          
          </div>
        <a href="https://t.me/theYescoin_bot/Yescoin?startapp=rhZtnC" class="testing">Yescoin</a>
        <div id='flex'>
        <div id='tguser'>
      
    <p>TG users:</p>
  
  </div>
 
  <p id='min'>33.03 min</p>
  </div>
  <div id='xlex'>
        <div id='xusers'>
      
    <p>X users:</p>
  
  </div>
 
  <p id='min'>33.03 min</p>
  </div>
        </div>
        <div className='drop'>
        <img src="./545ebd1a-22c2-498e-8362-5413fb71b196.jpg"/>
        <div id='s'>
          
          <div class="text-ex-tooltip">
          
            <p>Total players</p>
            <p id='d'>100 millions</p>
        
          
          </div>
          
          </div>
        <a href="https://t.me/herewalletbot/app?startapp=1812824" class="testing">HOT Wallett</a>
        <div id='flex'>
        <div id='tguser'>
      
    <p>TG users:</p>
  
  </div>
 
  <p id='min'>33.03 min</p>
  </div>
  <div id='xlex'>
        <div id='xusers'>
      
    <p>X users:</p>
  
  </div>
 
  <p id='min'>33.03 min</p>
  </div>
        </div>
        <div className='drop'>
        <img src="./Telegram-Web (2).png"/>
        <div id='s'>
          
          <div class="text-ex-tooltip">
          
            <p>Total players</p>
            <p id='d'>100 millions</p>
        
          
          </div>
          
          </div>
        <a href="https://t.me/memefi_coin_bot?start=r_1238b2973b" class="testing">MemeFi Coin</a>
        <div id='flex'>
        <div id='tguser'>
      
    <p>TG users:</p>
  
  </div>
 
  <p id='min'>33.03 min</p>
  </div>
  <div id='xlex'>
        <div id='xusers'>
      
    <p>X users:</p>
  
  </div>
 
  <p id='min'>33.03 min</p>
  </div>
        </div>
        <div className='drop'>
        <img src="./9d2c1399-0f61-41f7-b128-66e37724fd8c.jpg"/>
        <div id='s'>
          
          <div class="text-ex-tooltip">
          
            <p>Total players</p>
            <p id='d'>100 millions</p>
            
          
          </div>
          
          </div>
        <a href="https://t.me/fueljetton_bot/app?startapp=2073153774" class="testing">Fuel Mining</a>
        <div id='flex'>
        <div id='tguser'>
      
    <p>TG users:</p>
  
  </div>
 
  <p id='min'>33.03 min</p>
  </div>
  <div id='xlex'>
        <div id='xusers'>
      
    <p>X users:</p>
  
  </div>
 
  <p id='min'>33.03 min</p>
  </div>
        </div>
        <div className='drop'>
        <img src="./Telegram-Web (3).png"/>
        <div id='s'>
          
          <div class="text-ex-tooltip">
          
            <p>Total players</p>
            <p id='d'>100 millions</p>
           
          
          </div>
          
          </div>
        <a href="https://t.me/Gleam_AquaProtocol_Bot/app?startapp=cmM9NWY4YzJmOTM" class="testing">GLEAM</a>
        <div id='flex'>
        <div id='tguser'>
      
    <p>TG users:</p>
  
  </div>
 
  <p id='min'>33.03 min</p>
  </div>
  <div id='xlex'>
        <div id='xusers'>
      
    <p>X users:</p>
  
  </div>
 
  <p id='min'>33.03 min</p>
  </div>
        </div>
        <div className='drop'>
        <img src="./catizen-logo-Поиск-в-Google.png"/>
        <div id='s'>
          
          <div class="text-ex-tooltip">
          
            <p>Total players</p>
            <p id='d'>100 millions</p>
          
          
          </div>
          
          </div>
        <a href="https://t.me/catizenbot/gameapp?startapp=r_3_1668952" class="testing">Catizen</a>
        <div id='flex'>
        <div id='tguser'>
      
    <p>TG users:</p>
  
  </div>
 
  <p id='min'>33.03 min</p>
  </div>
  <div id='xlex'>
        <div id='xusers'>
      
    <p>X users:</p>
  
  </div>
 
  <p id='min'>33.03 min</p>
  </div>
        </div>
        <div className='drop'>
        <img src="./Telegувram-Web (2).png"/>
        <div id='s'>
          
          <div class="text-ex-tooltip">
          
            <p>Total players</p>
            <p id='d'>100 millions</p>
           
          
          </div>
          
          </div>
        <a href="https://t.me/BullApp_bot?start=2073153774_2851" class="testing">Mine Bull</a>
        <div id='flex'>
        <div id='tguser'>
      
    <p>TG users:</p>
  
  </div>
 
  <p id='min'>33.03 min</p>
  </div>
  <div id='xlex'>
        <div id='xusers'>
      
    <p>X users:</p>
  
  </div>
 
  <p id='min'>33.03 min</p>
  </div>
        </div>
        <div className='drop'>
        <img src="./06cdc5ff-b9f5-4dcd-8026-991ca13e66d5.jpg"/>
        <div id='s'>
          
          <div class="text-ex-tooltip">
          
            <p>Total players</p>
            <p id='d'>100 millions</p>
          
          
          </div>
          
          </div>
        <a href="https://t.me/Bodypump_app_bot?start=26dc1b48-a074-43b9-9551-b248676b60d7
" class="testing">BodyPump</a>
    <div id='flex'>
        <div id='tguser'>
      
    <p>TG users:</p>
  
  </div>
 
  <p id='min'>33.03 min</p>
  </div>
  <div id='xlex'>
        <div id='xusers'>
      
    <p>X users:</p>
  
  </div>
 
  <p id='min'>33.03 min</p>
  </div>
        </div>
        <div className='drop'>
        <img src="./e397af02-0070-4801-ae9d-4842f56ff541.jpg"/>
        <div id='s'>
          
          <div class="text-ex-tooltip">
          
            <p>Total players</p>
            <p id='d'>100 millions</p>
         
          
          </div>
          
          </div>
        <a href="https://t.me/dotcoin_bot?start=r_2073153774_1002138503845" class="testing">Dotcoin</a>
        <div id='flex'>
        <div id='tguser'>
      
    <p>TG users:</p>
  
  </div>
 
  <p id='min'>33.03 min</p>
  </div>
  <div id='xlex'>
        <div id='xusers'>
      
    <p>X users:</p>
  
  </div>
 
  <p id='min'>33.03 min</p>
  </div>
        </div>
        <div className='drop'>
     
        <img src="./23c62155-a0bf-40f8-a05c-001cf312d7ad.jpg"/>
        <div id='s'>
          
<div class="text-ex-tooltip">

  <p>Total players</p>
  <p id='d'>100 millions</p>


</div>

</div>
        <a href="https://t.me/tapswap_mirror_bot?start=r_2073153774" class="testing">TapSwap</a>
        <div id='flex'>
        <div id='tguser'>
      
    <p>TG users:</p>
  
  </div>
 
  <p id='min'>33.03 min</p>
  </div>
  <div id='xlex'>
        <div id='xusers'>
      
    <p>X users:</p>
  
  </div>
 
  <p id='min'>33.03 min</p>
  </div>
  </div>
       
       
        <div className='drop'>
        <img src="./c0d349c1-1503-4783-8be7-17419faa17a1.jpg"/>
        <div id='s'>
          
          <div class="text-ex-tooltip">
          
            <p>Total players</p>
            <p id='d'>100 millions</p>
        
          
          </div>
          
          </div>
        <a href="https://t.me/vertus_app_bot/app?startapp=2073153774" class="testing">Vertus</a>
        <div id='flex'>
        <div id='tguser'>
      
    <p>TG users:</p>
  
  </div>
 
  <p id='min'>33.03 min</p>
  </div>
  <div id='xlex'>
        <div id='xusers'>
      
    <p>X users:</p>
  
  </div>
 
  <p id='min'>33.03 min</p>
  </div>
        </div>
        <div className='drop'>
        <img src="./images.png"/>
        <div id='s'>
          
          <div class="text-ex-tooltip">
          
            <p>Total players</p>
            <p id='d'>100 millions</p>
       
          
          </div>
          
          </div>
        <a href="https://t.me/holdwallet_bot/app?startapp=HW665I4R5YF1" class="testing">HOLD WALLET</a>
        <div id='flex'>
        <div id='tguser'>
      
    <p>TG users:</p>
  
  </div>
 
  <p id='min'>33.03 min</p>
  </div>
  <div id='xlex'>
        <div id='xusers'>
      
    <p>X users:</p>
  
  </div>
 
  <p id='min'>33.03 min</p>
  </div>
        </div>
        <div className='drop'>
        <img src="./f293fbeb-e193-43e4-8706-d8529c2049f0.jpg"/>
        <div id='s'>
          
          <div class="text-ex-tooltip">
          
            <p>Total players</p>
            <p id='d'>100 millions</p>
        
          </div>
          
          </div>
        <a href="https://t.me/pixel_wallet_bot?start=7192352961" class="testing">Pixel Wallet</a>
        <div id='flex'>
        <div id='tguser'>
      
    <p>TG users:</p>
  
  </div>
 
  <p id='min'>33.03 min</p>
  </div>
  <div id='xlex'>
        <div id='xusers'>
      
    <p>X users:</p>
  
  </div>
 
  <p id='min'>33.03 min</p>
  </div>
        </div>
        <div className='drop'>
  
          <img src="./5d85f142-33cc-4df2-a2c2-e5ba7d3fbcb0.jpg"/>
          <div id='s'>
          
          <div class="text-ex-tooltip">
          
            <p>Total players</p>
            <p id='d'>100 millions</p>
       
          
          </div>
          
          </div>
        <a href="https://t.me/pocketfi_bot/Mining?startapp=2073153774" class="testing">PocketFi</a>
        <div id='flex'>
        <div id='tguser'>
      
    <p>TG users:</p>
  
  </div>
 
  <p id='min'>33.03 min</p>
  </div>
  <div id='xlex'>
        <div id='xusers'>
      
    <p>X users:</p>
  
  </div>
 
  <p id='min'>33.03 min</p>
  </div>
        </div>

        <div className='drop'>
        <img src="./cdc54fbd-c6b9-4c9a-887e-2ff9e03aa115.jpg"/>
        <div id='s'>
          
          <div class="text-ex-tooltip">
          
            <p>Total players</p>
            <p id='d'>100 millions</p>
         
          
          </div>
          
          </div>
        <a href="https://t.me/avagoldcoin_bot?start=c77e36a6685568259b44" class="testing">AVACOIN</a>
        <div id='flex'>
        <div id='tguser'>
      
    <p>TG users:</p>
  
  </div>
 
  <p id='min'>33.03 min</p>
  </div>
  <div id='xlex'>
        <div id='xusers'>
      
    <p>X users:</p>
  
  </div>
 
  <p id='min'>33.03 min</p>
  </div>
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
