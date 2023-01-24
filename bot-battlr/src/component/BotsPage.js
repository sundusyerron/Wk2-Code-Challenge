import React, { useEffect, useState } from "react";
import YourBotArmy from "./YourBotArmy";
import axios from "axios";
import BotCollection from "./BotCollection"
//import BotCard from "./BotCard";

function BotsPage() {
  const [bots, setBots] = useState([]);
  const [yourBots, setYourBots] = useState([]);
  console.log(yourBots)

  useEffect(() => {
    axios.get("https://vercel1-smoky.vercel.app/bots")
         .then((res)=>{
          setYourBots(res.data)
         })
          .catch((error) => console.log(error));
  }, []);

  function addBotToArmy(bot) {
    if (!yourBots.includes(bot)) return;
    setYourBots([...yourBots, bot]);
    
  }
  
  function filt (bolt) {
    setYourBots((yourBots) => yourBots.filter((yourBot) => yourBot.id !== bolt.id ))

  }

  function handleDelete (bot) {
    axios.delete(`https://vercel1-smoky.vercel.app/bots/${bot.id}`)
      .then(() => {
        setBots((prevBots) => prevBots.filter(b => b.id !== bot.id));
        setYourBots((prevYourBots) => prevYourBots.filter(b => b.id !== bot.id));
      })
      .catch((error) => console.log(error));
  }
  

  // function deleteBot(bot) {
  //   const updateYourBots = yourBots.filter((b) => b.id !== bot.id);
  //   const updateBots = bots.filter((b) => b.id !== bot.id);

  //   fetch(` http://localhost:/bots${bot.id}`, {
  //     method: "DELETE",
  //   }).then(() => {
  //     setYourBots(updateYourBots)
  //     setBots(updateBots)})
  // }
console.log(bots);
  return (
    <div>
    
      <YourBotArmy
        yourBots={yourBots}
        // addBotToArmy={addBotToArmy}
        filt={filt}
        
        handleDelete={handleDelete}
        
        
      />

      <BotCollection
        bots={bots}
        addBotToArmy={addBotToArmy()}
        handleDelete={handleDelete}
        
      />
    </div>
  );
}

export default BotsPage;