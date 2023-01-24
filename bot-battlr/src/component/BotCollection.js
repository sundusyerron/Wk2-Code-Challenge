import React from "react";
import BotCard from "./BotCard"

function BotCollection({bots, addBotToArmy, handleDelete}) {
  // Your code here
  // console.log(bots)
  const col = botCol.map((bot) => {
    return  <BotCard key={bot.id} bot={bot} botArmy={botArmy} setBotArmy={setBotArmy} setIsActive={setIsActive}/>}
   )
  return (
    <div className="ui four column grid">
      <div className="row">
        {bots.map((bot) => (
          <BotCard key={bot.id} bot={bot} handleAdd={addBotToArmy} handleDelete={handleDelete}/>
        ))
        }
      </div>
    </div>
  );
}

export default BotCollection;