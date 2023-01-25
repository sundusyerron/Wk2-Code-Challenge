import React from "react";
import BotCard from "./BotCard";

function BotCollection({ botCol, botArmy, setBotArmy, setIsActive }) {
  // Your code here
  const col = botCol.map((bot) => {
   return  <BotCard key={bot.id} bot={bot} botArmy={botArmy} setBotArmy={setBotArmy} setIsActive={setIsActive}/>}
  )
  return (
    <div className="ui four column grid">
      <div className="row">
        
        {col}
      </div>
    </div>
  );
}

export default BotCollection;