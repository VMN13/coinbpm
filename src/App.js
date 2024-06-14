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
        
      <container id='head'>
      <div id="Stasik">
        
     <div id="reveal-text">
  Air
</div>
</div>
  

  
     <div id="Drop">
      
     <div id="reveal">
      
  DROP
</div>
   </div>
   </container>

     <div id="Mining">
     <div id="BPM">
    
     </div>
  BPM CARD
  <img id="podpis" src="./Без названия (5).png"/>
 
  

<div id="Authors">
Authors:VMN OR NMS
<h2 className='mine'>mine coins and earn dollars!
</h2>
</div>
     </div>
     
     <container>
        <Navbar><nav>
        <div className='drop'>
        <img src="./cf4b37ec-cb63-48b1-8f31-c33a264d84ec.jpg"/>
        
        <a href="https://t.me/BlumCryptoBot/app?startapp=ref_44yiaiaqGW" class="testing">BLUM</a>
       
        <div id='flex'>
        <div id='tguser'>
      
    <p>Trade, connect, grow and... farm Blum Points! </p>
  
  </div>
 
  <p id='min'>Made by @blumcrypto team 🌸</p>
  </div>
 
        </div>
  
        <div className='drop'>
        <img src="./545ebd1a-22c2-498e-8362-5413fb71b196.jpg"/>
        
        <a href="https://t.me/herewalletbot/app?startapp=1812824" class="testing">NEAR Wallet</a>
        <div id='flex'>
        <div id='tguser'>
      
    <p>New generation Telegram wallet. Updates:</p>
  
  </div>
 
  <p id='min'>@hotonnear</p>
  </div>
 
        </div>
  
        
        <div className='drop'>
        <img src="./26f879be-2427-4951-bdcf-e8a3ff8f6e57.jpg"/>
        <div id='s'>
          
         
          
          </div>
        <a href="https://web.telegram.org/k/#@memefi_coin_bot" class="testing">Memefi<br/>club</a>
        <div id='flex'>
        <div id='tguser'>
      
    <p>The app is an idle game created by the MemeFi team!</p>
  
  </div>
 
  <p id='min'>33.03 min</p>
  </div>
  
        </div>
      
        <div className='drop'>
        <img src="./1b94c215-8a2c-4011-a69f-b81561dbcaf5.jpg"/>
        <div id='s'>
       
          </div>
        <a href="https://t.me/theYescoin_bot/Yescoin?startapp=rhZtnC" class="testing">Yescoin</a>
        <div id='flex'>
       
      
    <p>Yes it is...</p>
  <p id='min'>@theYescoin_bot</p>
  </div>
  
        </div>
        <div className='drop'>
        <img src="./545ebd1a-22c2-498e-8362-5413fb71b196.jpg"/>
        <div id='s'>
          
        
          
          </div>
        <a href="https://t.me/herewalletbot/app?startapp=1812824" class="testing">HOT Wallett</a>
        <div id='flex'>
        <div id='tguser'>
      
    <p>New generation Telegram wallet. Updates:</p>
  
  </div>
 
  <p id='min'>@hotonnear</p>
  </div>
  
        </div>
        <div className='drop'>
        <img src="./Telegram-Web (2).png"/>
        <div id='s'>
          
        
          
          </div>
        <a href="https://t.me/memefi_coin_bot?start=r_1238b2973b" class="testing">MemeFi<br/>Club Coin</a>
        <div id='flex'>
        <div id='tguser'>
      
    <p>Fight ghost enemies and collect MemeFi Coin rewards in the fastest-growing Telegram app!
News:<a href="https://t.me/memeficlub" class="http">https://t.me/memeficlub</a></p>
  
  </div>
 
  <p id='min'>@memefi_coin_bot</p>
  </div>
  
        </div>
        <div className='drop'>
        <img src="./9d2c1399-0f61-41f7-b128-66e37724fd8c.jpg"/>
        <div id='s'>
          
         
          
          </div>
        <a href="https://t.me/fueljetton_bot/app?startapp=2073153774" class="testing">Fuel Mining</a>
        <div id='flex'>
        <div id='tguser'>
    <a href="https://t.me/fueljetton_support" class="http"><p>Support / Поддержка @fueljetton_support</p></a>
  </div>
 
  <p id='min'>@fueljetton_bot</p>
  </div>
 
        </div>
        <div className='drop'>
        <img src="./Telegram-Web (3).png"/>
        <div id='s'>
          
         
          
          </div>
        <a href="https://t.me/Gleam_AquaProtocol_Bot/app?startapp=cmM9NWY4YzJmOTM" class="testing">GLEAM</a>
        <div id='flex'>
        <div id='tguser'>
      
    <p>Invest, connect and Farm Aqua Points! Made by @aquaprotocolxyzchannelen team. Powered by https://gleam.bot</p>
  
  </div>
 
  <p id='min'>@Gleam_AquaProtocol_Bot</p>
  </div>
  
        </div>
        <div className='drop'>
        <img src="./catizen-logo-Поиск-в-Google.png"/>
        <div id='s'>
          
       
          
          </div>
        <a href="https://t.me/catizenbot/gameapp?startapp=r_3_1668952" class="testing">Catizen</a>
        <div id='flex'>
        <div id='tguser'>
      
    <p>QA: https://t.me/CatizenAI/60111/100980
Report: https://forms.gle/hapoM9XdRTf4bDBZ9
Ann：https://t.me/CatizenAnn</p>
  
  </div>
 
  <p id='min'>@catizenbot</p>
  </div>
  
        </div>
        <div className='drop'>
        <img src="./Telegувram-Web (2).png"/>
        <div id='s'>
          
          
          
          </div>
        <a href="https://t.me/BullApp_bot?start=2073153774_2851" class="testing">Mine Bull</a>
        <div id='flex'>
        <div id='tguser'>
      
    <p>Start mining Bull @HoldBull</p>
  
  </div>
 
  <p id='min'>@BullApp_bot</p>
  </div>
  
        </div>
        <div className='drop'>
        <img src="./06cdc5ff-b9f5-4dcd-8026-991ca13e66d5.jpg"/>
        <div id='s'>
          
          
          
          </div>
        <a href="https://t.me/Bodypump_app_bot?start=26dc1b48-a074-43b9-9551-b248676b60d7
" class="testing">BodyPump</a>
    <div id='flex'>
        <div id='tguser'>
      
    <p>Sport & Health</p>
  
  </div>
 
  <p id='min'>@Bodypump_app_bot</p>
  </div>
 
        </div>
        <div className='drop'>
        <img src="./e397af02-0070-4801-ae9d-4842f56ff541.jpg"/>
        <div id='s'>
          
        
          
          </div>
        <a href="https://t.me/dotcoin_bot?start=r_2073153774_1002138503845" class="testing">Dotcoin</a>
        <div id='flex'>
        <div id='tguser'>
      
    <p>Everything starts from a DOT</p>
  
  </div>
 
  <p id='min'>@dotcoin_bot</p>
  </div>
  
        </div>
        <div className='drop'>
     
        <img src="./23c62155-a0bf-40f8-a05c-001cf312d7ad.jpg"/>
        <div id='s'>
          


</div>
        <a href="https://t.me/tapswap_mirror_bot?start=r_2073153774" class="testing">TapSwap</a>
        <div id='flex'>
        <div id='tguser'>
      
    <p>@tapswap_mirror_bot</p>
  
  </div>
 
 
  </div>
 
  </div>
       
       
        <div className='drop'>
        <img src="./c0d349c1-1503-4783-8be7-17419faa17a1.jpg"/>
        <div id='s'>
          
          
          </div>
        <a href="https://t.me/vertus_app_bot/app?startapp=2073153774" class="testing">Vertus</a>
        <div id='flex'>
        <div id='tguser'>
      
    <p>@vertus_app_bot</p>
  
  </div>
 

  </div>
  
        </div>
        <div className='drop'>
        <img src="./images.png"/>
        <div id='s'>
          
         
          
          </div>
        <a href="https://t.me/holdwallet_bot/app?startapp=HW665I4R5YF1" class="testing">HOLD WALLET</a>
        <div id='flex'>
        <div id='tguser'>
      
    <p>Hold Wallet - BSC Diamond Hand</p>
  
  </div>
 
  <p id='min'>@holdwallet_bot</p>
  </div>
  
        </div>
        <div className='drop'>
        <img src="./f293fbeb-e193-43e4-8706-d8529c2049f0.jpg"/>
        <div id='s'>
          
         
          
          </div>
        <a href="https://t.me/pixel_wallet_bot?start=7192352961" class="testing">Pixel Wallet</a>
        <div id='flex'>
        <div id='tguser'>
      
    <p>Gamified Seamless Multichain wallet for the @hellopixelverse ecosystem</p>
  
  </div>
 
  <p id='min'>@pixel_wallet_bot</p>
  </div>
 
        </div>
        <div className='drop'>
  
          <img src="./5d85f142-33cc-4df2-a2c2-e5ba7d3fbcb0.jpg"/>
          <div id='s'>
          
        
          
          </div>
        <a href="https://t.me/pocketfi_bot/Mining?startapp=2073153774" class="testing">PocketFi</a>
        <div id='flex'>
        <div id='tguser'>
      
    <p>Crosschain exchange for digital assets</p>
  
  </div>
 
  <p id='min'>@pocketfi_bot</p>
  </div>
 
        </div>

       
      
       

      </nav></Navbar>
        </container>
          
        <container>
   
   <footer>
    <div id="fot">
      AirDrop BMP
    
      <span>2024</span> 
    </div>
   </footer>
   </container>

    </div>

 

</div>
</div>
  );
}


export default App;
