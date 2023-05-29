require("./configuration/bot-config");
const iciro = require("./configuration/gtps-config.js");
const nevo = require("./interface");
const mess = require("./message/respon-mess.json");
const thumb = require("./configuration/thumbnail-path");
const smm = require("./configuration/smm-config");

require("./settings");
const {
  default: makeWASocket,
  BufferJSON,
  WAMessageStubType,
  WA_DEFAULT_EPHEMERAL,
  generateWAMessageFromContent,
  downloadContentFromMessage,
  downloadHistory,
  proto,
  getMessage,
  generateWAMessageContent,
  prepareWAMessageMedia,
  generateWAMessage,
  areJidsSameUser,
  makeInMemoryStore,
} = require("@adiwajshing/baileys");
const translate = require("@vitalets/google-translate-api");
const fs = require("fs");
const util = require("util");
const chalk = require("chalk");
const { exec, spawn, execSync } = require("child_process");
const axios = require("axios");
const cheerio = require("cheerio");
const { fromBuffer } = require("file-type");
const path = require("path");
const os = require("os");
const fetch = require("node-fetch");
const ffmpeg = require("fluent-ffmpeg");
const google = require("google-it");
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI();
const FormData = require("form-data");
const speed = require("performance-now");
const { Primbon } = require("scrape-primbon");
const primbon = new Primbon();
const PhoneNumber = require("awesome-phonenumber");
const moment = require("moment-timezone");
const ameClient = require("amethyste-api");
const ameApi = new ameClient(
  "1f486b04b157f12adf0b1fe0bd83c92a28ce768683871d2a390e25614150d0c8fa404fd01b82a5ebf5b82cbfa22e365e611c8501225a93d5d1e87f9f420eb91b"
);
const hx = require("hxz-api");
const { performance } = require("perf_hooks");
const zee = require("xfarr-api");
const ms = require("ms");
const similarity = require("similarity");
const threshold = 0.72;

const { toAudio, toPTT } = require("./lib/converter");
const { yta, ytv, servers } = require("./lib/y2mate");
const rpg = require("./lib/games-rpg");
const levelling = require("./lib/levelling");
const _sewa = require("./lib/sewa");
const {
  pinterest,
  wallpaper,
  wikimedia,
  hentai,
  quotesAnime,
} = require("./lib/scraper");
const {
  bytesToSize,
  fileIO,
  UploadFileUgu,
  telesticker,
  webp2mp4File,
  TelegraPh,
} = require("./lib/uploader");
const { UdhAdCoy, ApusAhh } = require("./lib/dbs");
const {
  addResponList,
  delResponList,
  isAlreadyResponList,
  isAlreadyResponListGroup,
  sendResponList,
  updateResponList,
  getDataResponList,
} = require("./lib/respon-list");
const {
  smsg,
  getGroupAdmins,
  formatp,
  tanggal,
  tanggal_,
  tanggal__,
  formatDate,
  getTime,
  isUrl,
  sleep,
  clockString,
  runtime,
  fetchJson,
  getBuffer,
  jsonformat,
  delay,
  format,
  logic,
  generateProfilePicture,
  parseMention,
  getRandom,
} = require("./lib/myfunc");
const sewa = JSON.parse(fs.readFileSync("./database/sewa.json"));
const antilink = JSON.parse(fs.readFileSync("./database/antilink.json"));
const mute = JSON.parse(fs.readFileSync("./database/antilink.json"));
const database = require("./database/database.json");
const stcCmd = JSON.parse(fs.readFileSync("./database/command.json"));
const db_respon_list = JSON.parse(
  fs.readFileSync("./database/list-message.json")
);
const {
  sendButLoc,
  sendButDoC,
  sendButDoc,
  sendListMenu,
  sendListAge,
  sendListGender,
  sendListLang,
  sendButImage,
  sendKatalog,
  sendKatalog2,
  sendContact,
} = require("./lib/welcome");

pp_bot = fs.readFileSync(thumbnail);
qris = fs.readFileSync(donasi);
moment.tz.setDefault("Asia/Jakarta").locale("id");

module.exports = centrum = async (centrum, m, chatUpdate, store, reSize) => {
  try {
    var body =
      m.mtype === "conversation"
        ? m.message.conversation
        : m.mtype == "imageMessage"
        ? m.message.imageMessage.caption
        : m.mtype == "videoMessage"
        ? m.message.videoMessage.caption
        : m.mtype == "extendedTextMessage"
        ? m.message.extendedTextMessage.text
        : m.mtype == "buttonsResponseMessage"
        ? m.message.buttonsResponseMessage.selectedButtonId
        : m.mtype == "listResponseMessage"
        ? m.message.listResponseMessage.singleSelectReply.selectedRowId
        : m.mtype == "templateButtonReplyMessage"
        ? m.message.templateButtonReplyMessage.selectedId
        : m.mtype == "messageContextInfo"
        ? m.message.buttonsResponseMessage?.selectedButtonId ||
          m.message.listResponseMessage?.singleSelectReply.selectedRowId ||
          m.text
        : "";
    var budy = typeof m.text == "string" ? m.text : "";
    const isCmd = /^[°•π÷×¶∆£¢€¥®™�✓_=|~!?#/$%^&.+-,\\\©^]/.test(body);
    const prefix = isCmd ? budy[0] : "";
    const command = isCmd
      ? body.slice(1).trim().split(" ").shift().toLowerCase()
      : "";
    const from = mek.key.remoteJid;
    const time = moment(Date.now())
      .tz(timezone)
      .locale("id")
      .format("HH:mm:ss z");
    const wita = moment(Date.now())
      .tz("Asia/Makassar")
      .locale("id")
      .format("HH:mm:ss z");
    const wit = moment(Date.now())
      .tz("Asia/Jayapura")
      .locale("id")
      .format("HH:mm:ss z");
    const salam = moment(Date.now()).tz(timezone).locale("id").format("a");
    const args = body.trim().split(/ +/).slice(1);
    const pushname = m.pushName || "No Name";
    const sender = m.isGroup
      ? mek.key.participant
        ? mek.key.participant
        : mek.participant
      : mek.key.remoteJid;
    const isCreator = [centrum.user.id, ...global.owner]
      .map((v) => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net")
      .includes(m.sender);
    const itsMe = m.sender == centrum.user.id ? true : false;
    const text = (q = args.join(" "));
    const c = args.join(" ");
    const quoted = m.quoted ? m.quoted : m;
    const mime = (quoted.msg || quoted).mimetype || "";
    const isMedia = /image|video|sticker|audio/.test(mime);

    // Group
    const botNumber = centrum.user.id
      ? centrum.user.id.split(":")[0] + "@s.whatsapp.net"
      : centrum.user.id;
    const groupMetadata = m.isGroup ? await centrum.groupMetadata(m.chat) : "";
    const groupId = m.isGroup ? groupMetadata.id : "";
    const groupName = m.isGroup ? groupMetadata.subject : "";
    const participants = m.isGroup ? await groupMetadata.participants : "";
    const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : "";
    const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false;
    const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false;
    const groupOwner = m.isGroup ? groupMetadata.owner : "";
    const isGroupOwner = m.isGroup
      ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender)
      : false;
    const groupMembers = m.isGroup ? await groupMetadata.participants : "";
    const mentionUser = [
      ...new Set([
        ...(m.mentionedJid || []),
        ...(m.quoted ? [m.quoted.sender] : []),
      ]),
    ];
    const isNumber = (x) => typeof x === "number" && !isNaN(x);
    const isPremium =
      isCreator ||
      global.premium
        .map((v) => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net")
        .includes(m.sender) ||
      false;
    const isSewa = _sewa.checkSewaGroup(m.chat, sewa);
    const isAntiLink = antilink.includes(m.chat) ? true : false;
    const isMute = mute.includes(m.chat) ? true : false;
    const blockList = await centrum.fetchBlocklist();
    if (blockList?.includes(m.sender)) return;
    const ini_mark = `0@s.whatsapp.net`;
    const timestampi = speed();
    const latensii = speed() - timestampi;
    const ftroli = {
      key: {
        fromMe: false,
        participant: "0@s.whatsapp.net",
        remoteJid: "6289523258649-1604595598@g.us",
      },
      message: {
        orderMessage: {
          itemCount: 2021,
          status: 200,
          thumbnail: pp_bot,
          surface: 200,
          message: `© ${ownername}`,
          orderTitle: "memek",
          sellerJid: "0@s.whatsapp.net",
        },
      },
      contextInfo: {
        forwardingScore: 999,
        isForwarded: true,
      },
      sendEphemeral: true,
    };
    const fdoc = {
      key: {
        participant: "0@s.whatsapp.net",
      },
      message: {
        documentMessage: {
          title: `© ${ownername}`,
          jpegThumbnail: pp_bot,
        },
      },
    };
    const fvn = {
      key: {
        participant: `0@s.whatsapp.net`,
        ...(from
          ? {
              remoteJid: "6289643739077-1613049930@g.us",
            }
          : {}),
      },
      message: {
        audioMessage: {
          mimetype: "audio/ogg; codecs=opus",
          seconds: 359996400,
          ptt: "true",
        },
      },
    };
    const fgif = {
      key: {
        participant: `0@s.whatsapp.net`,
        ...(from
          ? {
              remoteJid: "status@broadcast",
            }
          : {}),
      },
      message: {
        videoMessage: {
          title: `© ${ownername}`,
          h: `Hmm`,
          seconds: "359996400",
          gifPlayback: "true",
          caption: `© ${ownername}`,
          jpegThumbnail: pp_bot,
        },
      },
    };
    const fgclink = {
      key: {
        participant: "0@s.whatsapp.net",
        remoteJid: "0@s.whatsapp.net",
      },
      message: {
        groupInviteMessage: {
          groupJid: "6288213840883-1616169743@g.us",
          inviteCode: "m",
          groupName: "P",
          caption: `© ${ownername}`,
          jpegThumbnail: pp_bot,
        },
      },
    };
    const fvideo = {
      key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(from
          ? {
              remoteJid: "6289643739077-1613049930@g.us",
            }
          : {}),
      },
      message: {
        videoMessage: {
          title: `${pushname}`,
          h: `Hmm`,
          seconds: "359996400",
          caption: `${pushname}`,
          jpegThumbnail: pp_bot,
        },
      },
    };
    const floc = {
      key: {
        participant: "0@s.whatsapp.net",
      },
      message: {
        locationMessage: {
          name: `${ownername}`,
          jpegThumbnail: pp_bot,
        },
      },
    };
    const fkontak = {
      key: {
        participant: `0@s.whatsapp.net`,
        ...(from
          ? {
              remoteJid: `6283136505591-1614953337@g.us`,
            }
          : {}),
      },
      message: {
        contactMessage: {
          displayName: `${pushname}`,
          vcard: `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${
            sender.split("@")[0]
          }:${sender.split("@")[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
          jpegThumbnail: pp_bot,
          thumbnail: pp_bot,
          sendEphemeral: true,
        },
      },
    };
    let picaks = [flaming, fluming, flarun, flasmurf];
    let picak = picaks[Math.floor(Math.random() * picaks.length)];

    const reply = async (teks) => {
      return await centrum.sendFakeLink(
        m.chat,
        teks,
        salam,
        pushname,
        ownername,
        thumbnail,
        myweb,
        m
      );
    };
    async function getGcName(groupID) {
      try {
        let data_name = await haruka.groupMetadata(groupID);
        return data_name.subject;
      } catch (err) {
        return "-";
      }
    }
    const randomArr = (arr = []) => {
      return arr[Math.floor(Math.random() * arr.length)];
    };
    const isEmoji = (emo) => {
      let emoji_ranges =
        /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;
      let regexEmoji = new RegExp(emoji_ranges, "gi");
      return emo.match(regexEmoji);
    };
    for (let jid of mentionUser) {
      let user = db.data.users[jid];
      if (!user) continue;
      let afkTime = user.afkTime;
      if (!afkTime || afkTime < 0) continue;
      let reason = user.afkReason || "";
      reply(
        `Jangan tag dia!
Dia sedang AFK ${reason ? "\nReason : " + reason : "Reason : Nothing"}
Waktu : ${clockString(new Date() - afkTime)}
`.trim()
      );
    }

    if (
      m.isGroup &&
      !m.key.fromMe &&
      isAntiLink &&
      !isCreator &&
      !isGroupAdmins &&
      !isGroupOwner
    ) {
      if (budy.match(`https://chat.whatsapp.com`)) {
        if (!isBotAdmins) return;
        centrum.sendMessage(
          m.chat,
          {
            text: lang.KickAh(groupMetadata.subject),
          },
          {
            quoted: m,
          }
        );
        let gclink =
          `https://chat.whatsapp.com/` +
          (await centrum.groupInviteCode(m.chat));
        let isLinkThisGc = new RegExp(gclink, "i");
        let isgclink = isLinkThisGc.test(m.text);
        if (isgclink) return reply(lang.GjdKick());
        await centrum.sendMessage(m.chat, {
          delete: {
            remoteJid: m.chat,

            fromMe: false,
            id: m.key.id,
            participant: m.key.participant,
          },
        });
        centrum.groupParticipantsUpdate(m.chat, [m.sender], "remove");
      }
    }

    /*     if (db.data.users[m.sender].limit < 20 && !m.isGroup && !isCreator) {
            m.reply(`Limit kamu kurang sudah tidak cukup 🥺\n\n🇮🇩 Join Group Agar bisa menggunakan bot\nhttps://chat.whatsapp.com/EU890BcXjyBDkNaUT5WmYV\n\n🇺🇲 Please join the group to use this bot\nhttps://chat.whatsapp.com/EU890BcXjyBDkNaUT5WmYV`)
            return
        }*/

    // if (/^a(s|ss)alamu('|)alaikum$/.test(budy?.toLowerCase())) {
    //     const jawab_salam = [
    //         'Wa\'alaikumusalam',
    //         'Wa\'alaikumusalam wb',
    //         'Wa\'alaikumusalam Warohmatulahi Wabarokatuh',
    //     ]
    //     return reply(randomArr(jawab_salam))
    // }

    let cron = require("node-cron");
    cron.schedule(
      "00 23 * * *",
      () => {
        let user = Object.keys(global.db.data.users);
        for (let jid of user) {
          let limitUser = db.data.users[jid].premium
            ? global.limitawal.premium
            : global.limitawal.free;
          global.db.data.users[jid].limit = limitUser;
        }
        console.log("Reseted Limit");
      },
      {
        scheduled: true,
        timezone: "Asia/Jakarta",
      }
    );

    // Public & Self
    if (!centrum.public) {
      if (!m.key.fromMe && !isCreator) return;
    }

    // Push Message To Console
    if (m.message) {
      console.log(
        "\x1b[1;31m~\x1b[1;37m>",
        "[\x1b[1;32m CMD \x1b[1;37m]",
        time,
        chalk.green(isCmd ? body : body.slice(0, 20)),
        "from",
        chalk.green(pushname + " => " + m.sender.split("@")[0]),
        "in",
        chalk.green(groupName ? groupName : "Private Chat"),
        "args :",
        chalk.green(text.length)
      );
    }

    const sendFileFromUrl = async (from, url, caption, mek, men) => {
      let mime = "";
      let res = await axios.head(url);
      mime = res.headers["content-type"];
      if (mime.split("/")[1] === "gif") {
        return centrum.sendMessage(
          from,
          {
            video: await getBuffer(url),
            caption: caption,
            gifPlayback: true,
            mentions: men ? men : [],
            mimetype: "video/mp4",
          },
          {
            quoted: m,
          }
        );
      }
      let type = mime.split("/")[0] + "Message";
      if (mime === "application/pdf") {
        return centrum.sendMessage(
          m.chat,
          {
            document: await getBuffer(url),
            mimetype: "application/pdf",
            caption: caption,
            mentions: men ? men : [],
          },
          {
            quoted: m,
          }
        );
      }
      if (mime.split("/")[0] === "image") {
        return centrum.sendMessage(
          m.chat,
          {
            image: await getBuffer(url),
            caption: caption,
            mentions: men ? men : [],
          },
          {
            quoted: m,
          }
        );
      }
      if (mime.split("/")[0] === "video") {
        return centrum.sendMessage(
          m.chat,
          {
            video: await getBuffer(url),
            caption: caption,
            mentions: men ? men : [],
            mimetype: "video/mp4",
          },
          {
            quoted: m,
          }
        );
      }
      if (mime.split("/")[0] === "audio") {
        return centrum.sendMessage(
          m.chat,
          {
            audio: await getBuffer(url),
            caption: caption,
            mentions: men ? men : [],
            mimetype: "audio/mpeg",
          },
          {
            quoted: m,
          }
        );
      }
    };

    /*if(autorecording){
        	if(autorecording== true) return
        	await centrum.sendPresenceUpdate('recording', m.chat)
        	} else if(autoketik){
        		if(autoketik == true) return
        		await centrum.sendPresenceUpdate('composing', m.chat)
        		} else if(available){
        			if(available == true) return
        			centrum.sendPresenceUpdate('available', m.chat)
        			}*/
    const ctFooter = `𝘾𝙚𝙣𝙩𝙧𝙪𝙢 𝙋𝙧𝙞𝙫𝙖𝙩𝙚 𝙎𝙚𝙧𝙫𝙚𝙧

Player Online: ${fs.readFileSync(iciro.onlinecount)}
Server Uptime: ${fs.readFileSync(iciro.gtpsuptime)}
Bot Uptime: ${runtime(process.uptime())}
RAM Used: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(
      2
    )}MB / ${Math.round(require("os").totalmem / 1024 / 1024)}MB

https://gtps.app/i/`;

    switch (command) {
      case "sendbill":
        {
          //if (global.owner) return reply("What?");
          //m.reply("sended")
          const target = args[0];
          const growid = args[1];
          const roleName = args[2];
          const price = args[3];
          const sisaCoin = args[4];
          let data = `${iciro.player}/${growid}_.json`;
          let numbFormat = `${target}@s.whatsapp.net`;
          let sendedText = `
*Centrum Notifier*

Hello ${growid}!
Anda telah berhasil membeli role di centrum, berikut rinciannya:
Nama Role: *${roleName}*
Harga Role: *${price} coin*
Sisa Coin: *${sisaCoin} coin*

Terima Kasih!
`;
          let but = [
            {
              buttonId: `.delete account ${growid}`,
              buttonText: {
                displayText: "Beli Centrum Coin",
              },
              type: 1,
            },
          ];
          centrum.send5ButImg(
            numbFormat,
            sendedText,
            "𝘾𝙚𝙣𝙩𝙧𝙪𝙢 𝙋𝙧𝙞𝙫𝙖𝙩𝙚 𝙎𝙚𝙧𝙫𝙚𝙧",
            thumb.success,
            but,
            fdoc
          );
        }
        break;
      case "sendregist":
        {
          //if (global.owner) return reply("What?");
          //m.reply("sended")
          const target = args[0];
          const growid = args[1];
          const password = args[2];
          const ip = args[3];
          let numbFormat = `${target}@s.whatsapp.net`;
          let sendedText = `
*Success Register New Account*

GrowID: *${growid}*
Password: *${password}*
IP: *103.154.114.58*

If you never created an account, please press the button below.`;
          let but = [
            {
              buttonId: `.delete account ${growid}`,
              buttonText: {
                displayText: "It's not me",
              },
              type: 1,
            },
          ];
          centrum.send5ButImg(
            numbFormat,
            sendedText,
            "𝘾𝙚𝙣𝙩𝙧𝙪𝙢 𝙋𝙧𝙞𝙫𝙖𝙩𝙚 𝙎𝙚𝙧𝙫𝙚𝙧",
            thumb.menu,
            but,
            fdoc
          );
        }
        break;

      case "help":
      case "menu":
        {
          try {
            hit_total = await fetchJson(
              "https://api.countapi.xyz/hit/api-centrumbot.herokuapp.com/visits"
            );
          } catch {
            hit_total = {
              value: "-",
            };
          }
          hitall = `${hit_total.value == undefined ? "-" : hit_total.value}`;
          //let bio = (await centrum.fetchStatus(m.sender).catch(console.error) || {}).status || '-'
          let { exp, limit, level, money, role } =
            global.db.data.users[m.sender];
          let goblock = await centrum.fetchBlocklist();
          let { min, xp, max } = levelling.xpRange(level, global.multiplier);
          let dnew = new Date(new Date() + 3600000);
          let user = db.data.users[m.sender];
          let week = dnew.toLocaleDateString("en", {
            weekday: "long",
          });

          let date = dnew.toLocaleDateString("en", {
            day: "numeric",
            month: "long",
            year: "numeric",
          });
          let dateIslamic = Intl.DateTimeFormat("en" + "-TN-u-ca-islamic", {
            day: "numeric",
            month: "long",
            year: "numeric",
          }).format(dnew);

          let ownernya = ownernomer + "@s.whatsapp.net";
          var ini_anu = `Hi ${user.name}

╭─❒ 「 Bot Info 」 
├ Creator :  @${ownernya.split("@")[0]}
├ Powered  : @${ini_mark.split("@")[0]}
├ Prefix :   ${prefix}
├ Total hit : ${hitall}
├ Speed : ${latensii.toFixed(4)} Second
├ Memory Used : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(
            2
          )}MB / ${Math.round(require("os").totalmem / 1024 / 1024)}MB
├ Hostname : ${os.hostname()}
├ Platform : ${os.platform()}
├ Private chat : ${
            Object.keys(db.data.chats)
              .filter((v) => v.endsWith("@s.whatsapp.net"))
              .map((v) => v).length
          }
├ Group chat : ${
            Object.keys(db.data.chats)
              .filter((v) => v.endsWith("@g.us"))
              .map((v) => v).length
          }
├ Total chats :  ${
            Object.keys(db.data.chats)
              .filter((v) => v.endsWith("@s.whatsapp.net"))
              .map((v) => v).length +
            Object.keys(db.data.chats)
              .filter((v) => v.endsWith("@g.us"))
              .map((v) => v).length
          } 
├ User In Database : ${Object.keys(global.db.data.users).length} Users
├ User Registered : ${
            Object.values(global.db.data.users).filter(
              (user) => user.registered == true
            ).length
          } Users
├ User Banned : ${
            Object.values(global.db.data.users).filter(
              (user) => user.banned == true
            ).length
          } Users
├ User Blockir : ${goblock == undefined ? "0" : goblock.length} Users
╰❒ Runtime : ${runtime(process.uptime())}

╭─❒ 「 Date Info 」 
├ Masehi : ${week}, ${date}
├ Hijriah : ${dateIslamic}
╰❒

╭─❒ 「 User Info 」 
├ Register: ${
            user.registered
              ? `✅\n├ Name : ${user.name}\n├ Age : ${
                  user.age
                } years\n├ Gender : ${user.gender}\n├ Registered on : ${tanggal(
                  user.regTime
                )}`
              : "❌"
          }
├ Nomor : @${m.sender.split("@")[0]}
├ Limit : ${limit} limit
├ XP : ${exp}
├ Premium : ${user.premium ? "✅" : "❌"}
├ Me : ${m.key.fromMe ? "True" : "False"}
╰❒ Owner : ${isCreator ? "True" : `False`}
`;
          const buttojns = [
            {
              buttonId: ".command",
              buttonText: {
                displayText: "📖 List Menu",
              },
              type: 1,
            },
            {
              buttonId: ".owner",
              buttonText: {
                displayText: "🙍‍♂️ Owner",
              },
              type: 1,
            },
            {
              buttonId: ".donasi",
              buttonText: {
                displayText: "💰 Donation",
              },
              type: 1,
            },
          ];
          if (typemenu == "document") {
            if (db.data.users[m.sender].registered) {
              sendButDoC(
                centrum,
                m.chat,
                ini_anu,
                "© " + ownername,
                botname,
                ownername,
                `WhatsApp Bot Multi Device`,
                time,
                pp_bot,
                pp_bot,
                buttojns,
                [ownernya, ini_mark, m.sender],
                {
                  quoted: ftroli,
                }
              );
            } else
              sendButDoc(
                centrum,
                m.chat,
                ini_anu,
                "© " + ownername,
                botname,
                ownername,
                `WhatsApp Bot Multi Device`,
                time,
                pp_bot,
                pp_bot,
                buttojns,
                [ownernya, ini_mark, m.sender],
                {
                  quoted: ftroli,
                }
              );
          }
        }
        break;
      default:
        if (budy && ["p", "proses", "Proses", "P"].includes(budy) && !isCmd) {
          if (!m.isGroup) return;
          if (!isGroupAdmins && !isGroupOwner && !isCreator) return;
          if (!m.quoted) return reply(lang.LockCmd());
          let tek = m.quoted ? quoted.text : quoted.text.split(args[0])[1];
          let proses = (
            db.data.chats[m.chat].setProses ||
            `「 *TRANSAKSI PENDING* 」\n\n\`\`\`📆 TANGGAL : @tanggal\n⌚ JAM     : @jam\n✨ STATUS  : Pending\`\`\`\n\n📝 Catatan :\n@catatan\n\nPesanan @user sedang di proses!`
          )
            .replace("@tanggal", `${tanggal(new Date())}`)
            .replace("@jam", time)
            .replace("@catatan", `${tek ? tek : "-"}`)
            .replace("@user", "@" + m.quoted.sender.split("@")[0]);
          centrum.sendTextWithMentions(m.chat, proses, m);
        }

        if (budy && ["d", "done", "Done", "D"].includes(budy) && !isCmd) {
          if (!m.isGroup) return;
          if (!isGroupAdmins && !isGroupOwner && !isCreator) return;
          if (!m.quoted) return reply(lang.LockCmd());
          let tek = m.quoted ? quoted.text : quoted.text.split(args[0])[1];
          let sukses = (
            db.data.chats[m.chat].setDone ||
            `「 *TRANSAKSI BERHASIL* 」\n\n\`\`\`📆 TANGGAL : @tanggal\n⌚ JAM     : @jam\n✨ STATUS  : Berhasil\`\`\`\n\n📝 Catatan :\n@catatan\n\nTerimakasih @user Next Order ya🙏`
          )
            .replace("@tanggal", `${tanggal(new Date())}`)
            .replace("@jam", time)
            .replace("@catatan", `${tek ? tek : "-"}`)
            .replace("@user", "@" + m.quoted.sender.split("@")[0]);
          centrum.sendTextWithMentions(m.chat, sukses, m);
        }

        if (budy.startsWith("=>")) {
          if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly());

          function Return(sul) {
            sat = JSON.stringify(sul, null, 2);
            bang = util.format(sat);
            if (sat == undefined) {
              bang = util.format(sul);
            }
            return m.reply(bang);
          }
          try {
            m.reply(
              util.format(eval(`(async () => { return ${budy.slice(3)} })()`))
            );
          } catch (e) {
            reply(util.format(e));
          }
        }

        if (budy.startsWith(">")) {
          if (!m.key.fromMe && !isCreator) return m.reply(lang.ownerOnly());
          try {
            let evaled = await eval(budy.slice(2));
            if (typeof evaled !== "string")
              evaled = require("util").inspect(evaled);
            await m.reply(evaled);
          } catch (err) {
            await m.reply(util.format(err));
          }
        }

        if (budy.startsWith("<")) {
          if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly());
          try {
            return m.reply(
              JSON.stringify(eval(`${args.join(" ")}`), null, "\t")
            );
          } catch (e) {
            m.reply(util.format(e));
          }
        }

        if (budy.startsWith("$")) {
          if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly());
          mengtermuk = budy.slice(2);
          exec(mengtermuk, (err, stdout) => {
            if (err) return m.reply(err);
            if (stdout)
              return m.reply(`*${botname}*\nEXEC: ${mengtermuk}\n\n${stdout}`);
          });
        }
    }

    //Anti View Once

    if (m.mtype == "viewOnceMessage") {
      if (!db.data.chats[m.chat].antionce) return;
      let msg = m.message.viewOnceMessage.message;
      let type = Object.keys(msg)[0];
      let media = await downloadContentFromMessage(
        msg[type],
        type == "imageMessage" ? "image" : "video"
      );
      let buffer = Buffer.from([]);
      for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk]);
      }
      if (/video/.test(type)) {
        return centrum.sendFile(
          m.chat,
          buffer,
          "media.mp4",
          msg[type].caption || "",
          m
        );
      } else if (/image/.test(type)) {
        return centrum.sendFile(
          m.chat,
          buffer,
          "media.jpg",
          msg[type].caption || "",
          m
        );
      }
    }
  } catch (err) {
    //console.log(err)
    console.log(util.format(err));
  }
};

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update ${__filename}`));
  delete require.cache[file];
  require(file);
});
