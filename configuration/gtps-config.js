const fs = require("fs");
const chalk = require("chalk");

module.exports = {
  // Server Information 
  servername: "GROWCLF",
  serverowner: "alapjr & name",
  serverwebsite: "https://api.gtps.app/centrum",
  linkhost: "https://ct.gtps.app/host",
  // Gapunya website? beli di https://gtps.app/pricing aja, cuma 2 dlan

  // Path => navigate to the folder like the example
  onlinecount: "C:/Users/Administrator/Downloads/GROWCLF LAMA/Core/online_count.txt",
  player: "C:/Users/Administrator/Downloads/GROWCLF LAMA/Core/players",
  world: "C:/Users/Administrator/Downloads/GROWCLF LAMA/Core/worlds",
  guild: "C:/Users/Administrator/Downloads/GROWCLF LAMA/Coreguilds",

//C:/Users/WhatUpTime.com/Desktop/CentrumRemastered
//D:/Project GTPS/Centrum Gen 2

  // WhatsApp Bot
  basiclogs: "C:/Users/Administrator/Downloads/GROWCLF LAMA/Core/whatsapp-bot-logs/bot.txt",
  droplogs: "C:/Users/Administrator/Downloads/GROWCLF LAMA/Core/whatsapp-bot-logs/drop.txt",
  unlilogs: "C:/Users/Administrator/Downloads/GROWCLF LAMA/Core/whatsapp-bot-logs/unli.txt",
  gtpsuptime: "C:/Users/Administrator/Downloads/GROWCLF LAMA/Core/uptime.txt",
  
  // In Game Information
  wotd: "START",
  dailyquestblockname1: "Mystery Block",
  dailyquestquantity1: "100",
  dailyquestblockname2: "Wood Block",
  dailyquestquantity2: "200",
};

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update'${__filename}'`));
  delete require.cache[file];
  require(file);
});
