case "setcmd":
    {
      db.data.cmd = db.data.cmd || {};
      if (!m.quoted) return reply(lang.SetCmd(prefix, command));
      if (!m.quoted.fileSha256) return reply(lang.HashCmd());
      if (!text) return reply(lang.CmdApa());
      let sticker = db.data.cmd;
      let hash = m.quoted.fileSha256.toString("base64");
      if (sticker[hash] && sticker[hash].locked) return reply(lang.UCmd());
      sticker[hash] = {
        q,
        mentionedJid: m.mentionedJid,
        creator: m.sender,
        at: +new Date(),
        locked: false,
      };
      reply(`Done!`);
    }
    break;
  case "deletecmd":
  case "delcmd":
    {
      let hash = m.quoted.fileSha256.toString("base64");
      if (!hash) return reply(lang.HashCmd());
      let sticker = db.data.cmd;
      if (sticker[hash] && sticker[hash].locked) return reply(lang.UCmd());
      delete sticker[hash];
      reply(lang.DelCmd());
    }
    break;
  case "listcmd":
    {
      let teks = `
*List Hash*
Info: *bold* hash is Locked

*Hash :*
${Object.entries(db.data.cmd)
.map(
 ([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} 
*Command: ${value.q}*
*Creator : @${value.creator.split("@")[0]}*
*Create Time : ${moment(value.at * 1)
   .tz("Asia/Jakarta")
   .format("DD/MM/YYYY HH:mm:ss")}*
*Locked : ${value.locked}*
`
)
.join("\n")}
`.trim();
      centrum.sendTextWithMentions(m.chat, teks, m);
    }
    break;
  case "lockcmd":
    {
      if (!isCreator) return reply(lang.ownerOnly());
      if (!m.quoted) return reply(lang.LockCmd());
      if (!m.quoted.fileSha256) return reply(lang.HashCmd());
      let sticker = db.data.cmd;
      let hash = m.quoted.fileSha256.toString("base64");
      if (!(hash in sticker)) return reply(lang.NoCmd());
      sticker[hash].locked = !/^un/i.test(command);
      reply(lang.ok());
    }
    break;
  case "antiviewonce":
  case "antionce":
    if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly());
    if (args[0] === "on") {
      if (db.data.chats[m.chat].antionce) return reply(lang.OnBef());
      db.data.chats[m.chat].antionce = true;
      reply(lang.OkOn(command));
    } else if (args[0] === "off") {
      if (!db.data.chats[m.chat].antionce) return reply(lang.OffYaBef());
      db.data.chats[m.chat].antionce = false;
      reply(lang.OffBef());
    } else {
      centrum.sendButMessage(
        from,
        "Mode Anti View Once",
        `© ${ownername}`,
        [
          {
            buttonId: ".antionce on",
            buttonText: {
              displayText: "ON",
            },
            type: 1,
          },
          {
            buttonId: ".antionce off",
            buttonText: {
              displayText: "OFF",
            },
            type: 1,
          },
        ],
        {
          quoted: fgif,
        }
      );
    }
    break;
  case "autoblok":
  case "autoblok212":
    {
      if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly());
      if (args[0] === "on") {
        if (global.autoblok === true) return reply(lang.OnBef());
        global.autoblok = true;
        reply(lang.OkOn(command));
      } else if (args[0] === "off") {
        if (global.autoblok === false) return reply(lang.OffYaBef());
        global.autoblok = false;
        reply(lang.OffBef("Autoblok"));
      } else {
        centrum.sendButMessage(
          m.chat,
          "Mode Autoblok",
          `© ${ownername}`,
          [
            {
              buttonId: ".autoblok on",
              buttonText: {
                displayText: "ON",
              },
              type: 1,
            },
            {
              buttonId: ".autoblok off",
              buttonText: {
                displayText: "OFF",
              },
              type: 1,
            },
          ],
          {
            quoted: fgif,
          }
        );
      }
    }
    break;
  case "autobio":
    {
      if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly());
      if (args[0] === "on") {
        if (global.autobio === true) return reply(lang.OnBef());
        global.autobio = true;
        reply(lang.OkOn(command));
      } else if (args[0] === "off") {
        if (global.autobio === false) return reply(lang.OffYaBef());
        global.autobio = false;
        reply(lang.OffBef("Autobio"));
      } else {
        centrum.sendButMessage(
          m.chat,
          "Mode Autobio",
          `© ${ownername}`,
          [
            {
              buttonId: ".autobio on",
              buttonText: {
                displayText: "ON",
              },
              type: 1,
            },
            {
              buttonId: ".autobio off",
              buttonText: {
                displayText: "OFF",
              },
              type: 1,
            },
          ],
          {
            quoted: fgif,
          }
        );
      }
    }
    break;
  case "anticall":
    {
      if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly());
      if (args[0] === "on") {
        if (global.anticall === true) return reply(lang.OnBef());
        global.anticall = true;
        reply(lang.OkOn(command));
      } else if (args[0] === "off") {
        if (global.anticall === false) return reply(lang.OffYaBef());
        global.anticall = false;
        reply(lang.OffBef("Anticall"));
      } else {
        centrum.sendButMessage(
          m.chat,
          "Mode Anticall",
          `© ${ownername}`,
          [
            {
              buttonId: ".anticall on",
              buttonText: {
                displayText: "ON",
              },
              type: 1,
            },
            {
              buttonId: ".anticall off",
              buttonText: {
                displayText: "OFF",
              },
              type: 1,
            },
          ],
          {
            quoted: fgif,
          }
        );
      }
    }
    break;
  case "autorespond":
  case "autorespon":
    {
      if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly());
      if (args[0] === "on") {
        if (db.data.settings[botNumber].autorespond)
          return reply(lang.OnBef());
        db.data.settings[botNumber].autorespond = true;
        reply(lang.OkOn(command));
      } else if (args[0] === "off") {
        if (!db.data.settings[botNumber].autorespond)
          return reply(lang.OffBef());
        db.data.settings[botNumber].autorespond = false;
        reply(lang.OffBef("Auto Respond"));
      } else {
        centrum.sendButMessage(
          m.chat,
          "Mode Auto Respond",
          `© ${ownername}`,
          [
            {
              buttonId: ".autorespond on",
              buttonText: {
                displayText: "ON",
              },
              type: 1,
            },
            {
              buttonId: ".autorespond off",
              buttonText: {
                displayText: "OFF",
              },
              type: 1,
            },
          ],
          {
            quoted: fgif,
          }
        );
      }
    }
    break;
  case "autoread":
    {
      if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly());
      if (args[0] === "on") {
        if (global.autoread) return reply(lang.OnBef());
        global.autoread = true;
        reply(lang.OkOn(command));
      } else if (args[0] === "off") {
        if (!global.autoread) return reply(lang.OffBef());
        global.autoread = false;
        reply(lang.OffBef("Auto Read"));
      } else {
        centrum.sendButMessage(
          m.chat,
          "Mode Auto Read",
          `© ${ownername}`,
          [
            {
              buttonId: ".autoread on",
              buttonText: {
                displayText: "ON",
              },
              type: 1,
            },
            {
              buttonId: ".autoread off",
              buttonText: {
                displayText: "OFF",
              },
              type: 1,
            },
          ],
          {
            quoted: fgif,
          }
        );
      }
    }
    break;
  case "antilink":
    if (!m.isGroup) return reply(lang.groupOnly());
    if (!isGroupAdmins && !isGroupOwner && !isCreator)
      return reply(lang.adminOnly());
    if (!isBotAdmins) return reply(lang.botNotAdmin());
    if (args[0] === "on") {
      if (isAntiLink) return reply(lang.OnBef());
      antilink.push(m.chat);
      fs.writeFileSync(
        "./database/antilink.json",
        JSON.stringify(antilink, null, 2)
      );
      reply(lang.OkOn("Antilink"));
    } else if (args[0] === "off") {
      if (!isAntiLink) return reply(lang.OffYaBef());
      let anu = antilink.indexOf(m.chat);
      antilink.splice(anu, 1);
      fs.writeFileSync(
        "./database/antilink.json",
        JSON.stringify(antilink, null, 2)
      );
      reply(lang.OffBef("Antilink"));
    } else {
      centrum.sendButMessage(
        from,
        "Mode Antilink",
        `© ${ownername}`,
        [
          {
            buttonId: ".antilink on",
            buttonText: {
              displayText: "ON",
            },
            type: 1,
          },
          {
            buttonId: ".antilink off",
            buttonText: {
              displayText: "OFF",
            },
            type: 1,
          },
        ],
        {
          quoted: fgif,
        }
      );
    }
    break;
  case "detectpromote":
  case "promotedetect":
    if (!m.isGroup) return reply(lang.groupOnly());
    if (!isGroupAdmins && !isGroupOwner && !isCreator)
      return reply(lang.adminOnly());
    if (!isBotAdmins) return reply(lang.botNotAdmin());
    if (args[0] === "on") {
      if (db.data.chats[m.chat].promote) return reply(lang.OnBef());
      db.data.chats[m.chat].promote = true;
      reply(lang.OkOn("Detect Promote"));
    } else if (args[0] === "off") {
      if (!db.data.chats[m.chat].promote) return reply(lang.OffYaBef());
      db.data.chats[m.chat].promote = false;
      reply(lang.OffBef("Detect Promote"));
    } else {
      centrum.sendButMessage(
        from,
        "Mode Detect Promote",
        `© ${ownername}`,
        [
          {
            buttonId: ".detectpromote on",
            buttonText: {
              displayText: "ON",
            },
            type: 1,
          },
          {
            buttonId: ".detectpromote off",
            buttonText: {
              displayText: "OFF",
            },
            type: 1,
          },
        ],
        {
          quoted: fgif,
        }
      );
    }
    break;
  case "detectdemote":
  case "demotedetect":
    if (!m.isGroup) return reply(lang.groupOnly());
    if (!isGroupAdmins && !isGroupOwner && !isCreator)
      return reply(lang.adminOnly());
    if (!isBotAdmins) return reply(lang.botNotAdmin());
    if (args[0] === "on") {
      if (db.data.chats[m.chat].demote) return reply(lang.OnBef());
      db.data.chats[m.chat].demote = true;
      reply(lang.OkOn("Detect Demote"));
    } else if (args[0] === "off") {
      if (!db.data.chats[m.chat].demote) return reply(lang.OffYaBef());
      db.data.chats[m.chat].demote = false;
      reply(lang.OffBef("Detect Demote"));
    } else {
      centrum.sendButMessage(
        from,
        "Mode Detect Promote",
        `© ${ownername}`,
        [
          {
            buttonId: ".detectdemote on",
            buttonText: {
              displayText: "ON",
            },
            type: 1,
          },
          {
            buttonId: ".detectdemote off",
            buttonText: {
              displayText: "OFF",
            },
            type: 1,
          },
        ],
        {
          quoted: fgif,
        }
      );
    }
    break;
  case "updatewelcome":
  case "setwelcome":
    {
      if (!m.isGroup) return reply(lang.groupOnly());
      if (!isGroupAdmins && !isGroupOwner && !isCreator)
        return reply(lang.adminOnly());
      if (!text)
        return reply(
          `Contoh penggunaan: ${
            prefix + command
          } Welcome @user\n\n- @user (Tag user)\n- @number (Nomor user)\n- @group (Nama group)\n- @bio (Bio user)\n- @members (Total member)\n- @day (Hari)\n- @date (Tanggal)\n- @time (Jam)\n- @desc (Deskripsi group)`
        );
      db.data.chats[m.chat].setWelcome = text;
      centrum.sendButMessage(
        m.chat,
        lang.ok() + " " + command + "\n\n" + text,
        `© ${ownername}`,
        [
          {
            buttonId: ".cekwelcome",
            buttonText: {
              displayText: "Check Welcome",
            },
            type: 1,
          },
        ],
        {
          quoted: fgif,
        }
      );
    }
    break;
  case "updatepromote":
  case "setpromote":
    {
      if (!m.isGroup) return reply(lang.groupOnly());
      if (!isGroupAdmins && !isGroupOwner && !isCreator)
        return reply(lang.adminOnly());
      if (!text)
        return reply(
          `Contoh penggunaan: ${
            prefix + command
          } Promote @user\n\n- @user (Tag user)\n- @number (Nomor user)\n- @group (Nama group)\n- @bio (Bio user)\n- @members (Total member)\n- @day (Hari)\n- @date (Tanggal)\n- @time (Jam)\n- @desc (Deskripsi group)`
        );
      db.data.chats[m.chat].setPromote = text;
      centrum.sendButMessage(
        m.chat,
        lang.ok() + " " + command + "\n\n" + text,
        `© ${ownername}`,
        [
          {
            buttonId: ".cekpromote",
            buttonText: {
              displayText: "Check Promote",
            },
            type: 1,
          },
        ],
        {
          quoted: fgif,
        }
      );
    }
    break;
  case "updatedemote":
  case "setdemote":
    {
      if (!m.isGroup) return reply(lang.groupOnly());
      if (!isGroupAdmins && !isGroupOwner && !isCreator)
        return reply(lang.adminOnly());
      if (!text)
        return reply(
          `Contoh penggunaan: ${
            prefix + command
          } Demote @user\n\n- @user (Tag user)\n- @number (Nomor user)\n- @group (Nama group)\n- @bio (Bio user)\n- @members (Total member)\n- @day (Hari)\n- @date (Tanggal)\n- @time (Jam)\n- @desc (Deskripsi group)`
        );
      db.data.chats[m.chat].setDemote = text;
      centrum.sendButMessage(
        m.chat,
        lang.ok() + " " + command + "\n\n" + text,
        `© ${ownername}`,
        [
          {
            buttonId: ".cekdemote",
            buttonText: {
              displayText: "Check Demote",
            },
            type: 1,
          },
        ],
        {
          quoted: fgif,
        }
      );
    }
    break;
  case "updateproses":
  case "setproses":
    {
      if (!m.isGroup) return reply(lang.groupOnly());
      if (!isGroupAdmins && !isGroupOwner && !isCreator)
        return reply(lang.adminOnly());
      if (!text)
        return reply(
          `Contoh penggunaan: ${
            prefix + command
          } Proses @user\n\n- @user (Tag user)\n- @tanggal (tanggal)\n- @jam (jam)\n- @catatan (catatan pesanan)`
        );
      db.data.chats[m.chat].setProses = text;
      centrum.sendButMessage(
        m.chat,
        lang.ok() + " " + command + "\n\n" + text,
        `© ${ownername}`,
        [
          {
            buttonId: ".cekpromote",
            buttonText: {
              displayText: "Check Proses",
            },
            type: 1,
          },
        ],
        {
          quoted: fgif,
        }
      );
    }
    break;
  case "updatedone":
  case "setdone":
    {
      if (!m.isGroup) return reply(lang.groupOnly());
      if (!isGroupAdmins && !isGroupOwner && !isCreator)
        return reply(lang.adminOnly());
      if (!text)
        return reply(
          `Contoh penggunaan: ${
            prefix + command
          } Done @user\n\n- @user (Tag user)\n- @tanggal (tanggal)\n- @jam (jam)\n- @catatan (catatan pesanan)`
        );
      db.data.chats[m.chat].setDone = text;
      centrum.sendButMessage(
        m.chat,
        lang.ok() + " " + command + "\n\n" + text,
        `© ${ownername}`,
        [
          {
            buttonId: ".cekdone",
            buttonText: {
              displayText: "Check Done",
            },
            type: 1,
          },
        ],
        {
          quoted: fgif,
        }
      );
    }
    break;
  case "cekproses":
    {
      if (!m.isGroup) return reply(lang.groupOnly());
      defaultwel = `「 *TRANSAKSI PENDING* 」\n\n\`\`\`📆 TANGGAL : @tanggal\n⌚ JAM     : @jam\n✨ STATUS  : Pending\`\`\`\n\n📝 Catatan :\n@catatan\n\nPesanan @user sedang di proses!`;
      textwel = db.data.chats[m.chat].setProses || defaultwel;
      reply("Text proses in group " + groupName + `\n\n` + textwel);
    }
    break;
  case "cekdone":
    {
      if (!m.isGroup) return reply(lang.groupOnly());
      defaultwel = `「 *TRANSAKSI BERHASIL* 」\n\n\`\`\`📆 TANGGAL : @tanggal\n⌚ JAM     : @jam\n✨ STATUS  : Berhasil\`\`\`\n\n📝 Catatan :\n@catatan\n\nTerimakasih @user Next Order ya🙏`;
      textwel = db.data.chats[m.chat].setDone || defaultwel;
      reply("Text done in group " + groupName + `\n\n` + textwel);
    }
    break;
  case "deldone":
    {
      if (!m.isGroup) return reply(lang.groupOnly());
      if (!isGroupAdmins && !isGroupOwner && !isCreator)
        return reply(lang.adminOnly());
      db.data.chats[m.chat].setDone = "";
      centrum.sendButMessage(
        m.chat,
        lang.ok(),
        `© ${ownername}`,
        [
          {
            buttonId: ".cekdone",
            buttonText: {
              displayText: "Check Done",
            },
            type: 1,
          },
        ],
        {
          quoted: fgif,
        }
      );
    }
    break;
  case "delproses":
    {
      if (!m.isGroup) return reply(lang.groupOnly());
      if (!isGroupAdmins && !isGroupOwner && !isCreator)
        return reply(lang.adminOnly());
      db.data.chats[m.chat].setProses = "";
      centrum.sendButMessage(
        m.chat,
        lang.ok(),
        `© ${ownername}`,
        [
          {
            buttonId: ".cekproses",
            buttonText: {
              displayText: "Check Proses",
            },
            type: 1,
          },
        ],
        {
          quoted: fgif,
        }
      );
    }
    break;
  case "delpromote":
    {
      if (!m.isGroup) return reply(lang.groupOnly());
      if (!isGroupAdmins && !isGroupOwner && !isCreator)
        return reply(lang.adminOnly());
      db.data.chats[m.chat].setPromote = "";
      centrum.sendButMessage(
        m.chat,
        lang.ok(),
        `© ${ownername}`,
        [
          {
            buttonId: ".cekpromote",
            buttonText: {
              displayText: "Check Promote",
            },
            type: 1,
          },
        ],
        {
          quoted: fgif,
        }
      );
    }
    break;
  case "deldemote":
    {
      if (!m.isGroup) return reply(lang.groupOnly());
      if (!isGroupAdmins && !isGroupOwner && !isCreator)
        return reply(lang.adminOnly());
      db.data.chats[m.chat].setDemote = "";
      centrum.sendButMessage(
        m.chat,
        lang.ok(),
        `© ${ownername}`,
        [
          {
            buttonId: ".cekdemote",
            buttonText: {
              displayText: "Check Demote",
            },
            type: 1,
          },
        ],
        {
          quoted: fgif,
        }
      );
    }
    break;
  case "cekpromote":
    {
      if (!m.isGroup) return reply(lang.groupOnly());
      defaultwel = `@user Promote From @group`;
      textwel = db.data.chats[m.chat].setPromote || defaultwel;
      reply("Text promote in group " + groupName + `\n\n` + textwel);
    }
    break;
  case "cekdemote":
    {
      if (!m.isGroup) return reply(lang.groupOnly());
      defaultwel = `@user Demote From @group`;
      textwel = db.data.chats[m.chat].setDemote || defaultwel;
      reply("Text demote in group " + groupName + `\n\n` + textwel);
    }
    break;
  case "cekwelcome":
    {
      if (!m.isGroup) return reply(lang.groupOnly());
      defaultwel = `*Welcome to @group*\n\n📛 : _@user_\n🔢 : _@number_\n💌 : _@bio_\n🏅 : _@members Members_\n📆 : _@day, @date_\n⏰ : _@time Asia/Jakarta_`;
      textwel = db.data.chats[m.chat].setWelcome || defaultwel;
      reply("Text welcome in group " + groupName + `\n\n` + textwel);
    }
    break;
  case "cekleft":
    {
      if (!m.isGroup) return reply(lang.groupOnly());
      defaultwel = `◪ Goodbye @user\n◪ Leave from group: \n@group\n\n└─ ❏ Nomor: @number\nGoodBye~~`;
      textwel = db.data.chats[m.chat].setLeave || defaultwel;
      reply("Text googbye in group " + groupName + `\n\n` + textwel);
    }
    break;
  case "delgoodbye":
    {
      if (!m.isGroup) return reply(lang.groupOnly());
      if (!isGroupAdmins && !isGroupOwner && !isCreator)
        return reply(lang.adminOnly());
      db.data.chats[m.chat].setLeave = "";
      centrum.sendButMessage(
        m.chat,
        lang.ok(),
        `© ${ownername}`,
        [
          {
            buttonId: ".cekleft",
            buttonText: {
              displayText: "Check Welcome",
            },
            type: 1,
          },
        ],
        {
          quoted: fgif,
        }
      );
    }
    break;
  case "delwelcome":
    {
      if (!m.isGroup) return reply(lang.groupOnly());
      if (!isGroupAdmins && !isGroupOwner && !isCreator)
        return reply(lang.adminOnly());
      db.data.chats[m.chat].setWelcome = "";
      centrum.sendButMessage(
        m.chat,
        lang.ok(),
        `© ${ownername}`,
        [
          {
            buttonId: ".cekwelcome",
            buttonText: {
              displayText: "Check Welcome",
            },
            type: 1,
          },
        ],
        {
          quoted: fgif,
        }
      );
    }
    break;
  case "updategoodbye":
  case "setgoodbye":
  case "setleft":
  case "setleave":
    {
      if (!m.isGroup) return reply(lang.groupOnly());
      if (!isGroupAdmins && !isGroupOwner && !isCreator)
        return reply(lang.adminOnly());
      if (!text)
        return reply(
          `Contoh penggunaan: ${
            prefix + command
          } Goodbye @user\n\n- @user (Tag user)\n- @number (Nomor user)\n- @group (Nama group)\n- @bio (Bio user)\n- @members (Total member)\n- @day (Hari)\n- @date (Tanggal)\n- @time (Jam)\n- @desc (Deskripsi group)`
        );
      db.data.chats[m.chat].setLeave = text;
      centrum.sendButMessage(
        m.chat,
        lang.ok() + "\n" + text,
        `© ${ownername}`,
        [
          {
            buttonId: ".cekleft",
            buttonText: {
              displayText: "Check Welcome",
            },
            type: 1,
          },
        ],
        {
          quoted: fgif,
        }
      );
    }
    break;
  case "welcome":
    if (!m.isGroup) return reply(lang.groupOnly());
    if (!isGroupAdmins && !isGroupOwner && !isCreator)
      return reply(lang.adminOnly());
    if (args[0] === "on") {
      if (db.data.chats[m.chat].welcome) return reply(lang.OnBef());
      db.data.chats[m.chat].welcome = true;
      reply(lang.OkOn("Welcome"));
    } else if (args[0] === "off") {
      if (!db.data.chats[m.chat].welcome) return reply(lang.OffYaBef());
      db.data.chats[m.chat].welcome = false;
      reply(lang.OffBef("Welcome"));
    } else {
      centrum.sendButMessage(
        from,
        "Mode Welcome Msg",
        `© ${ownername}`,
        [
          {
            buttonId: ".welcome on",
            buttonText: {
              displayText: "ON",
            },
            type: 1,
          },
          {
            buttonId: ".welcome off",
            buttonText: {
              displayText: "OFF",
            },
            type: 1,
          },
        ],
        {
          quoted: fgif,
        }
      );
    }
    break;
  case "goodbye":
  case "left":
    if (!m.isGroup) return reply(lang.groupOnly());
    if (!isGroupAdmins && !isGroupOwner && !isCreator)
      return reply(lang.adminOnly());
    if (args[0] === "on") {
      if (db.data.chats[m.chat].goodbye) return reply(lang.OnBef());
      db.data.chats[m.chat].goodbye = true;
      reply(lang.OkOn("Goodbye"));
    } else if (args[0] === "off") {
      if (!db.data.chats[m.chat].goodbye) return reply(lang.OffYaBef());
      db.data.chats[m.chat].goodbye = false;
      reply(lang.OffBef("Goodbye"));
    } else {
      centrum.sendButMessage(
        from,
        "Mode Goodbye Msg",
        `© ${ownername}`,
        [
          {
            buttonId: ".left on",
            buttonText: {
              displayText: "ON",
            },
            type: 1,
          },
          {
            buttonId: ".left off",
            buttonText: {
              displayText: "OFF",
            },
            type: 1,
          },
        ],
        {
          quoted: fgif,
        }
      );
    }
    break;
  case "linkgroup":
  case "linkgrup":
  case "linkgc":
    {
      if (!m.isGroup) return reply(lang.groupOnly());
      let response = await centrum.groupInviteCode(m.chat);
      centrum.sendText(
        m.chat,
        `Link Group : *${groupMetadata.subject}*\nhttps://chat.whatsapp.com/${response}`,
        m,
        {
          detectLink: true,
        }
      );
    }
    break;
  case "d":
  case "delete":
  case "del":
    {
      if (!m.isGroup) {
        if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly());
        if (!m.quoted) throw false;
        let { chat, fromMe, id, isBaileys } = m.quoted;
        if (!isBaileys) return reply(lang.NoMsgBot());
        centrum.sendMessage(m.chat, {
          delete: {
            remoteJid: m.chat,
            id: m.quoted.id,
            participant: m.quoted.sender,
          },
        });
      } else {
        if (!isGroupAdmins && !isGroupOwner && !isCreator)
          return reply(lang.adminOnly());
        if (!isBotAdmins) return reply(lang.botNotAdmin());
        if (!m.quoted) throw false;
        let { chat, fromMe, id, isBaileys } = m.quoted;
        centrum.sendMessage(m.chat, {
          delete: {
            remoteJid: m.chat,
            id: m.quoted.id,
            participant: m.quoted.sender,
          },
        });
      }
    }
    break;
  case "ping":
    {
      const used = process.memoryUsage();
      const cpus = os.cpus().map((cpu) => {
        cpu.total = Object.keys(cpu.times).reduce(
          (last, type) => last + cpu.times[type],
          0
        );
        return cpu;
      });
      const cpu = cpus.reduce(
        (last, cpu, _, { length }) => {
          last.total += cpu.total;
          last.speed += cpu.speed / length;
          last.times.user += cpu.times.user;
          last.times.nice += cpu.times.nice;
          last.times.sys += cpu.times.sys;
          last.times.idle += cpu.times.idle;
          last.times.irq += cpu.times.irq;
          return last;
        },
        {
          speed: 0,
          total: 0,
          times: {
            user: 0,
            nice: 0,
            sys: 0,
            idle: 0,
            irq: 0,
          },
        }
      );
      let timestamp = speed();
      let latensi = speed() - timestamp;
      let neww = performance.now();
      let oldd = performance.now();
      let respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${
        oldd - neww
      } _miliseconds_\n\nRuntime : ${runtime(process.uptime())}
💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
_NodeJS Memory Usaage_
${Object.keys(used)
.map(
(key, _, arr) =>
  `${key.padEnd(Math.max(...arr.map((v) => v.length)), " ")}: ${formatp(
    used[key]
  )}`
)
.join("\n")}
${
cpus[0]
? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times)
    .map(
      (type) =>
        `- *${(type + "*").padEnd(6)}: ${(
          (100 * cpu.times[type]) /
          cpu.total
        ).toFixed(2)}%`
    )
    .join("\n")}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus
.map(
(cpu, i) =>
  `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(
    cpu.times
  )
    .map(
      (type) =>
        `- *${(type + "*").padEnd(6)}: ${(
          (100 * cpu.times[type]) /
          cpu.total
        ).toFixed(2)}%`
    )
    .join("\n")}`
)
.join("\n\n")}`
: ""
}
            `.trim();
      m.reply(respon);
    }
    break;
  case "runtime":
    reply(`Runtime : ${runtime(process.uptime())}`);
    break;
  case "public":
    {
      if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly());
      centrum.public = true;
      reply(lang.BotPublic());
    }
    break;
  case "self":
    {
      if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly());
      centrum.public = false;
      reply(lang.BotSelf());
    }
    break;
  case "owner":
  case "creator":
    {
      sendContact(centrum, m.chat, global.owner, m);
    }
    break;
  case "rules":
    {
      let gam = await getBuffer(picak + "Terms and Conditions");
      var but = [
        {
          urlButton: {
            displayText: "Website",
            url: `${myweb}`,
          },
        },
      ];
      await centrum.sendMessage(
        m.chat,
        {
          image: gam,
          caption: lang.rules(prefix),
        },
        {
          quoted: m,
        }
      );
    }
    break;
  case "setcaptionpay":
    {
      if (!m.isGroup) return reply(lang.groupOnly());
      if (!isGroupAdmins && !isGroupOwner && !isCreator)
        return reply(lang.adminOnly());
      if (!text)
        return reply(`Contoh penggunaan: ${prefix + command} Payment`);
      db.data.chats[m.chat].captionPay = text;
      centrum.sendButMessage(
        m.chat,
        lang.ok() + " " + command + "\n\n" + text,
        `© ${ownername}`,
        [
          {
            buttonId: ".menu",
            buttonText: {
              displayText: "Menu",
            },
            type: 1,
          },
        ],
        {
          quoted: fgif,
        }
      );
    }
    break;
  case "donasi":
  case "donate":
    {
      await centrum.sendMessage(
        m.chat,
        {
          image: qris,
          caption: lang.tos(ownernomer),
        },
        {
          quoted: m,
        }
      );
    }
    break;
  case "liston":
  case "listonline":
    {
      if (!isGroupAdmins && !isGroupOwner) return reply(lang.adminOnly());
      let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat;
      let online = [...Object.keys(store.presences[id]), botNumber];
      centrum.sendText(
        m.chat,
        "List Online:\n\n" +
          online.map((v) => "⭔ @" + v.replace(/@.+/, "")).join`\n`,
        m,
        {
          mentions: online,
        }
      );
    }
    break;
  case "setname":
  case "setsubject":
    {
      if (!m.isGroup) return reply(lang.groupOnly());
      if (!(isGroupAdmins || isGroupOwner)) return reply(lang.adminOnly());
      if (!isBotAdmins) return reply(lang.botNotAdmin());
      if (!text) return reply(lang.SetGcName(prefix, command));
      await centrum
        .groupUpdateSubject(m.chat, text)
        .then((res) => m.reply(lang.ok()))
        .catch((err) => m.reply(jsonformat(err)));
    }
    break;
  case "hidetag":
    if (!m.isGroup) return reply(lang.groupOnly());
    if (!(isGroupAdmins || isGroupOwner)) return reply(lang.adminOnly());
    centrum.sendMessage(
      from,
      {
        text: q ? q : "",
        mentions: participants.map((a) => a.id),
      },
      {
        quoted: fkontak,
      }
    );
    break;
  case "banuser":
  case "banned":
    {
      if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly());
      if (!m.quoted && !text) return reply(lang.NoTagBan(prefix, command));
      let users = m.mentionedJid[0]
        ? m.mentionedJid[0]
        : m.quoted
        ? m.quoted.sender
        : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
      if (typeof db.data.users[users] == "undefined")
        m.reply("Pengguna tidak ada didalam data base");
      let banUser = db.data.users[users];
      banUser.banned = true;
      banUser.BannedReason = text.split("|")[1]
        ? text.split("|")[1]
        : "I don't know";
      reply(lang.ok());
    }
    break;
  case "unbanuser":
  case "unban":
  case "unbanned":
    {
      if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly());
      if (!m.quoted && !text) return reply(lang.NoTagBan(prefix, command));
      let users = m.mentionedJid[0]
        ? m.mentionedJid[0]
        : m.quoted
        ? m.quoted.sender
        : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
      let banUser = db.data.users[users];
      banUser.banned = false;
      reply(lang.ok());
    }
    break;
  case "block":
    {
      if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly());
      if (!m.quoted && !text) return reply(lang.NoTagBan(prefix, command));
      let users = m.mentionedJid[0]
        ? m.mentionedJid[0]
        : m.quoted
        ? m.quoted.sender
        : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
      await centrum
        .updateBlockStatus(users, "block")
        .then((res) => m.reply(lang.ok()))
        .catch((err) => m.reply(lang.err()));
    }
    break;
  case "unblock":
    {
      if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly());
      if (!m.quoted && !text) return reply(lang.NoTagBan(prefix, command));
      let users = m.mentionedJid[0]
        ? m.mentionedJid[0]
        : m.quoted
        ? m.quoted.sender
        : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
      await centrum
        .updateBlockStatus(users, "unblock")
        .then((res) => m.reply(lang.ok()))
        .catch((err) => m.reply(lang.err()));
    }
    break;
  case "kick":
    {
      if (!m.isGroup) return reply(lang.groupOnly());
      if (!isBotAdmins) return reply(lang.botNotAdmin());
      if (!(isGroupAdmins || isGroupOwner)) return reply(lang.adminOnly());
      if (!m.quoted && !text) return reply(lang.MauKick());
      let users = m.mentionedJid[0]
        ? m.mentionedJid[0]
        : m.quoted
        ? m.quoted.sender
        : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
      await centrum
        .groupParticipantsUpdate(m.chat, [users], "remove")
        .then((res) => m.reply(lang.ok()))
        .catch((err) => m.reply(lang.err()));
    }
    break;
  case "add":
    {
      if (!m.isGroup) return reply(lang.groupOnly());
      if (!isBotAdmins) return reply(lang.botNotAdmin());
      if (!(isGroupAdmins || isGroupOwner)) return reply(lang.adminOnly());
      if (!m.quoted && !text) return reply(lang.MauAdd());
      let users = m.quoted
        ? m.quoted.sender
        : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
      await centrum
        .groupParticipantsUpdate(m.chat, [users], "add")
        .then((res) => m.reply(lang.ok()))
        .catch((err) => m.reply(lang.err()));
    }
    break;
  case "promote":
    {
      if (!m.isGroup) return reply(lang.groupOnly());
      if (!isBotAdmins) return reply(lang.botNotAdmin());
      if (!(isGroupAdmins || isGroupOwner)) return reply(lang.adminOnly());
      if (!m.quoted && !text) return reply(lang.NakPm());
      let users = m.mentionedJid[0]
        ? m.mentionedJid[0]
        : m.quoted
        ? m.quoted.sender
        : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
      await centrum
        .groupParticipantsUpdate(m.chat, [users], "promote")
        .then((res) => m.reply(lang.ok()))
        .catch((err) => m.reply(lang.err()));
    }
    break;
  case "demote":
    {
      if (!m.isGroup) return reply(lang.groupOnly());
      if (!isBotAdmins) return reply(lang.botNotAdmin());
      if (!(isGroupAdmins || isGroupOwner)) return reply(lang.adminOnly());
      if (!m.quoted && !text) return reply(lang.NakDm());
      let users = m.mentionedJid[0]
        ? m.mentionedJid[0]
        : m.quoted
        ? m.quoted.sender
        : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
      await centrum
        .groupParticipantsUpdate(m.chat, [users], "demote")
        .then((res) => m.reply(lang.ok()))
        .catch((err) => m.reply(lang.err()));
    }
    break;
  case "group":
  case "grup":
    if (!m.isGroup) return reply(lang.groupOnly());
    if (!isBotAdmins) return reply(lang.botNotAdmin());
    if (!(isGroupAdmins || isGroupOwner)) return reply(lang.adminOnly());
    if (args[0] === "open") {
      await centrum.groupSettingUpdate(from, "not_announcement");
      reply(lang.ok());
    } else if (args[0] === "close") {
      await centrum.groupSettingUpdate(from, "announcement");
      reply(lang.ok());
    } else {
      centrum.sendButMessage(
        from,
        "GROUP SETTING",
        `© ${ownername}`,
        [
          {
            buttonId: ".group open",
            buttonText: {
              displayText: "Open",
            },
            type: 1,
          },
          {
            buttonId: ".group close",
            buttonText: {
              displayText: "Close",
            },
            type: 1,
          },
        ],
        {
          quoted: fgif,
        }
      );
    }
    break;
  