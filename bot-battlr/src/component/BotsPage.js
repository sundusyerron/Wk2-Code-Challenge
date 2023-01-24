import React, { useState, useEffect } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";
import BotSpecs from "./BotSpecs";

function BotsPage() {
  //start here with your code for step one
  const [botCol, setBotCol] = useState([]);
  const [botArmy, setBotArmy] = useState([]);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8002/bots")
      .then((res) => res.json())
      .then((data) => setBotCol(data));
    }, []);
    // console.log(botCol)
    return (
      <div>
        <YourBotArmy botArmy={botArmy} setBotArmy={setBotArmy} setBotCol={setBotCol} />
        {isActive ? (<BotSpecs bot={isActive} setIsActive={setIsActive} setBotArmy={setBotArmy}/>): 
        (
          <BotCollection setBotArmy={setBotArmy} botCol={botCol} botArmy={botArmy} setIsActive={setIsActive} />
        )}
      </div>
    );
  }
  
  export default BotsPage;