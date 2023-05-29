const fs = require("fs");
const chalk = require("chalk");
const { doesNotThrow } = require("assert");

global.owner = ["6285330161462"];
global.staff = [""];
global.footer = "Dignity by Wayan Alap";
global.sessionName = "dignity";
global.prefa = ["", "/", "!", "."]; // "" = no prefix

global.thumb = fs.readFileSync("./assets/image/centrum.jpg");

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update'${__filename}'`));
  delete require.cache[file];
  require(file);
});
