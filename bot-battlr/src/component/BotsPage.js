
import React, { useEffect, useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";
function BotsPage() {
  const [bots, setBots] = useState([]);
  const [yourBots, setYourBots] = useState([]);

  useEffect(() => {
    fetch(" http://localhost:3000/bots")
    fetch(" http://localhost:8002/bots")
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

  function deleteBot(bot) {
    const updateYourBots = yourBots.filter((b) => b.id !== bot.id);
    const updateBots = bots.filter((b) => b.id !== bot.id);
  }

  function handleDelete (bot) {
    fetch(`http://localhost:8002/bots/${bot.id}`, {
      method:'DELETE',

    fetch(` http://localhost:3000/bots${bot.id}`, {
      method: "DELETE",
    }).then(() => {
      setYourBots(updateYourBots)
      setBots(updateBots)})
    })
    .then(res => res.json())
    .then(() => {
      setBots((bots) => bots.filter(botss => botss.id !== bot.id ))
      setYourBots((yourBots) => yourBots.filter(yourbotss => yourbotss.id !== bot.id ))

    })
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

  return (
    <div>
      <YourBotArmy
        yourBots={yourBots}
        setYourBots={setYourBots}
        deleteBot={deleteBot}
        addBotToArmy={filt}
        handleDelete={handleDelete}


      />
      <BotCollection
        bots={bots}
        addBotToArmy={addBotToArmy}
        deleteBot={deleteBot}
        handleDelete={handleDelete}

      />
    </div>
  );
}
export default BotsPage;