import React, { useEffect, useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  const [bots, setBots] = useState([]);
  const [yourBots, setYourBots] = useState([]);

  useEffect(() => {
    fetch(" http://localhost:3000/bots")
      .then((response) => response.json())
      .then((data) => setBots(data))
      .catch((error) => console.log(error));
  }, []);

  function addBotToArmy(bot) {
    if (yourBots.includes(bot)) return;
    setYourBots([...yourBots, bot]);
    
  }
  
  function filt (bolt) {
    setYourBots((yourBots) => yourBots.filter((yourBot) => yourBot.id !== bolt.id ))

  }

  function handleDelete (bot) {
    fetch(`http://localhost:3000/bots${bot.id}`, {
      method:'DELETE',

    })
    .then(res => res.json())
    .then(() => {
      setBots((bots) => bots.filter(botss => botss.id !== bot.id ))
      setYourBots((yourBots) => yourBots.filter(yourbotss => yourbotss.id !== bot.id ))
      
    })
  }

  

  return (
    <div>
      <YourBotArmy
        yourBots={yourBots}
        addBotToArmy={filt}
        handleDelete={handleDelete}
        
        
      />
      <BotCollection
        bots={bots}
        addBotToArmy={addBotToArmy}
        handleDelete={handleDelete}
        
      />
    </div>
  );
}

export default BotsPage;