const fs = require("fs");
const chalk = require("chalk");
const iciro = require("./configuration/gtps-config.js");
const a = "```";

module.exports = {
  menu: `〔 *List Menu Bot* 〕
 
⊳ status ( Server Status )
⊳ role ( Assets and Role Price List )
⊳ host ( Host and Community Link )
⊳ cekinfo
⊳ buy
  ╰┈➤ vip
  ╰┈➤ mod
  ╰┈➤ dev
  ╰┈➤ level
  ╰┈➤ gems
  ╰┈➤ ltitle
  ╰┈➤ drtitle
  ╰┈➤ 125title
`,
  rules: `〔 *Centrum Rules* 〕

1. Dilarang melakukan tindakan ilegal yang dapat mengganggu pengalaman bermain player lain.
2. Dilarang menjual akun in-game.
3. Player boleh menjual BGL dan Gems. Tetapi, role Zeus hanya boleh sebagai penengah (midman) antara seller dan buyer dan tidak boleh menjual BGL/Gems/Item demi menjaga stabilitas ekonomi Centrum.
4. Jika player menemukan bug/kesalahan di in-game, player wajib melaporkannya ke staff. Jika player ketahuan mengeksploitasi/memanfaatkan bug maka akan di kenakan sanksi yang berlaku.

Jika memiliki saran, kritik atau laporan, silahkan tekan tombol di bawah.
`,
report : `〔 *Report Center* 〕

Pastikan kamu mengirimkan pesan ke divisi yang tepat!

Untuk memberikan kritik, saran dan apapun yang berkaitan dengan Centrum Private Server, silahkan hubungi *Head Admin*.
Untuk melaporkan bug atau pengalaman buruk saat bermain, silahkan laporkan ke *Server Manager*.
Untuk melaporkan scam, abuse dan hal lain yang mengganggu pengalaman bermain, silahkan laporkan ke *Community Manager*.

Silahkan pilih divisi tujuan kamu.
`,
smenu: `〔 *Staff Command* 〕

⊳ give
  ╰┈➤ vip
  ╰┈➤ mod
  ╰┈➤ dev
  ╰┈➤ level
  ╰┈➤ gems
  ╰┈➤ ltitle
  ╰┈➤ drtitle
  ╰┈➤ 125title
⊳ change
  ╰┈➤ email
  ╰┈➤ username
  ╰┈➤ password
  ╰┈➤ punchid
  ╰┈➤ weather
⊳ cekinfoadv

⊳ bcall
⊳ bcgroup
⊳ antilink
  ╰┈➤ on
  ╰┈➤ off
⊳ antivirtext
  ╰┈➤ on
  ╰┈➤ off
⊳ addcmd
⊳ delcmd
⊳ listcmd
`,
  assets_and_role: `〔 *Assets and Role Price List* 〕
   
*⊷ Assets Price List ⊶*
${a}⊳ Level${a}
   ╰┈➤ 1/1 WLs
${a}⊳ Gems${a}
   ╰┈➤ 8.000/1 WLs
${a}⊳ Legendary Title${a}
   ╰┈➤ 100 WLs

*⊷ Role Price List ⊶*
${a}⊳ Zeus [ Tier 1 ]${a}
   ╰┈➤ 900 WLs  
${a}⊳ Hades [ Tier 2 ]${a}
   ╰┈➤ 500 WLs  
${a}⊳ Poseidon [ Tier 3 ]${a}
   ╰┈➤ 300 WLs  
${a}⊳ Triton [ Tier 4 ]${a}
   ╰┈➤ 150 WLs  
${a}⊳ Gaia [ Tier 5 ]${a}
   ╰┈➤ 50 WLs  
`,
  host_and_community: `〔 *Host and Community Link* 〕

*Link Group:*
[1] https://chat.whatsapp.com/LeCMZDDqDmm0wn02Rt2Fo2
[2] https://chat.whatsapp.com/IMpIPmFkg7x0iwhkBxXke3
[3] https://chat.whatsapp.com/BtboXzaZAQeHiJ0Epzwn7M

*Link Discord:*
[-] https://discord.gg/Fxf7JmyUp7
`,
};

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update'${__filename}'`));
  delete require.cache[file];
  require(file);
});
