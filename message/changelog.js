const fs = require("fs");
const chalk = require("chalk");
const iciro = require("./configuration/gtps-config.js");
const a = "```";

module.exports = {
  v101: `*Centrum Remastered Changelog*
    
*Version:* 1.0.1
*Date:* 25 October 2022

[~] Fixed dupe and crash issues
[~] Fixed a lag issue when farming
[~] Fixed the problem of players unable to login
[~] Increase the speed and stability of server performance

[+] Added the roles of Gaia, Triton, Poseidon, Hades and Zeus
[+] Added basic command features
[+] Added Rift cape with settings
`,

  v102: `*Centrum Remastered Changelog*
    
*Version:* 1.0.2
*Date:* 2 November 2022

[~] Fixed the problem of players unable to login when using Wi-Fi and VPN.
[~] Improving user interface of the social portal
[~] Improving user interface of the news banners

[+] Added /patrolmode
[+] Added custom lobby and boombox songs
[+] Added custom banners
[+] Added centrum community tabs in social portal
[+] Added buy tabs in social portal
[+] Added few basic commands for all role
`,

  v103: `*Centrum Remastered Changelog*
    
*Version:* 1.0.3
*Date:* 14 November 2022
  
[~] Fixed updating data
[~] Fixed a few command
[~] Fixed lagging when punching bedrock
[~] Super Broadcast requirements changed from requiring level 20 to requiring level 5
[~] Fixed crash issues
[~] Fixed Autosave anti rollback
[~] Fixing community tab

[+] Added whatsapp logs bot
[+] Added /drop, /givegems, /givelevel, /givelgn, /giveg4g, /givemtr, /givedoc and /give125.
`,
  v104: `*Centrum Remastered Changelog*
    
*Version:* 1.0.4
*Date:* 16 November 2022

[~] Fixed crashing world because kranken's 
[~] Fixed beep sound in super broadcast
[~] Fixed /copyset
[~] Fixed /resettitle
[~] Improving shop progress: 25%

[+] Added /findid
[+] Added /givessup
[+] Added /hidessup
[+] Added /cleanexit (for remove worldlist in exit)
[+] Added player count in world
[+] Added /restockall <quantity> (for restock all vendig machine)
[+] Added /item <itemid> <quantity> (for role zeus)
[+] Added /tsb for triton, /psb for poseidon, /hsb for hades and /zsb for zeus
[+] Added drop log to whatsapp bot
`
};

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update'${__filename}'`));
  delete require.cache[file];
  require(file);
});
