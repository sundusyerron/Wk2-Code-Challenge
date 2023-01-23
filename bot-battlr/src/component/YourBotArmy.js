import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ yourBots, setYourBots, deleteBot }) {
  function removeBotFromArmy(bot) {
    const newArmy = yourBots.filter((b) => b.id !== bot.id);
    setYourBots(newArmy);
  }
function YourBotArmy({ yourBots, addBotToArmy, handleDelete }) {


  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {yourBots.map((bot) => {
            return (
              <BotCard
                bot={bot}
                key={bot.id}
                removeBotFromArmy={removeBotFromArmy}
                deleteBot={deleteBot}
                isInArmy={true}
              key={bot.id} 
              bot={bot}
              handleAdd={addBotToArmy}
              handleDelete={handleDelete}
              />

            );
          })}
          Your Bot Army
        </div>
      </div>
    </div>
  );
}
export default YourBotArmy;