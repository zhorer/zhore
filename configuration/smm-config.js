const fs = require("fs");
const chalk = require("chalk");

// Untuk pembuatan apikey, hubungi
// Discord: akbarrdev#4444
// WhatsApp: wa.me/6283809215245
// GRATIS

module.exports = {
  api_key: "apikeymu",
  api_id: "apiidmu",
  id: {
    foll_ig: "1",
    foll_igbot: "5",
    foll_tt: "6",
    like_tt: "7",
    view_tt: "2",
    fyp: "8",
    discord_mem: "9",
  },
  keterangan: {
    foll_ig: "Followers instagram bergaransi, reffil 30 hari.",
    foll_igbot: "Followers instagram bot, no reffil.",
    foll_tt: "Followers tiktok no reffil",
    like_tt: "Tiktok video like.",
    view_tt: "Tiktok View",
    fyp: "FYP Tiktok (Share)",
    discord_mem: "Member discord bergaransi, refill 30 hari.",
  } 
};

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update'${__filename}'`));
  delete require.cache[file];
  require(file);
});
