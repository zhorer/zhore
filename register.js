// require("./settings");
// const { sendRegister } = require("./centrum.js");
const [target, name, password] = process.argv.slice(2);
// //      node register.js 6282370784874 akbar akbar33

// console.log(`Nama: ${name}\nNomor: ${password}\n${target}`);

// // function sendRegister(target, name = "", password = "") {
// //     let teks = `
// // *New account registered!*

// // GrowID: ${name}
// // Password: ${password}
// // IP: 103.154.114.58

// // Jika kamu merasa tidak pernah membuat account, silahkan tekan tombol dibawah.`;
// //     let sendTo = `${target}@s.whatsapp.net`
// //     let buttojns = [
// //       {
// //         buttonId: `.fakereg ${name}`,
// //         buttonText: {
// //           displayText: "Laporkan kesalahan",
// //         },
// //         type: 2,
// //       },
// //     ];
// //     console.log(teks)
// //     centrum.send5ButImg(
// //       sendTo,
// //       teks,
// //       "Centrum Vanguard",
// //       global.thumb,
// //       buttojns,
// //     );
// //   }
// sendRegister(target, name, password);
// console.log(`Sukses`);

// const axios = require("axios");

const api = "11rjboHpYbVw";
const teks = `*Success Register New Account*

GrowID: ${name}
Password: ${password}`;
const encodedParams = new URLSearchParams();
encodedParams.append("sender_number", "+6283809215245");
encodedParams.append("message", teks);

// const options = {
//   method: "POST",
//   url: "https://whatsapp-send-message1.p.rapidapi.com/api/send_message",
//   headers: {
//     "content-type": "application/x-www-form-urlencoded",
//     token: "nPWzFG08ffw5o70VneNoq6jPmZM49F",
//     "X-RapidAPI-Key": "80df3ee241msh8148db6d718d1f3p15e614jsndf25081f94cc",
//     "X-RapidAPI-Host": "whatsapp-send-message1.p.rapidapi.com",
//   },
//   data: encodedParams,
// };

// axios
//   .request(options)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });

const axios = require("axios");

axios.get('http://api.textmebot.com/send.php', {
  params: {
    recipient: target,
    apikey: api,
    text: teks,
    footer: "Centrum Vanguard",
    button1: "Ini Saya",
    button2: "Bukan Saya"
  }
})
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

  

function sendRegister(target, name = "", password = "") {
    let teks = `
*New account registered!*

GrowID: ${name}
Password: ${password}
IP: 103.154.114.58

Jika kamu merasa tidak pernah membuat account, silahkan tekan tombol dibawah.`;
    let sendTo = `${target}@s.whatsapp.net`
    let buttojns = [
      {
        buttonId: `.fakereg ${name}`,
        buttonText: {
          displayText: "Laporkan kesalahan",
        },
        type: 2,
      },
    ];
    //console.log(teks)
    centrum.send5ButImg(
      sendTo,
      teks,
      "Centrum Vanguard",
      global.thumb,
      buttojns,
    );
  }

//   http://api.textmebot.com/send.php?recipient=6282370784874&apikey=11rjboHpYbVw&text=HelloWorld&footer=IniFooter&button1=Yes&button2=No


//http://api.textmebot.com/send.php?recipient=+6283871376503&apikey=11rjboHpYbVw&text=.sendregist%206282370784874%20akbarrdev%20akbarrpasswords%20103.09.82