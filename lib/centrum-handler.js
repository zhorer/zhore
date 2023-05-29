







module.exports = centrum = async (centrum, m) => {
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
    console.log(teks)
    centrum.send5ButImg(
      sendTo,
      teks,
      "Centrum Vanguard",
      global.thumb,
      buttojns,
    );
  }
}