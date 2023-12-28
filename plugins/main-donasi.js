let fs = require('fs')
let handler = async (m, { conn }) => {
let teks = 'donasi'
let dana = global.dana
let pulsa = global.pulsa
let gopay = global.gopay
let numberowner = global.numberowner
let anu = `Bot Tes doang, gausah donate. Kalu ada yang eror chat owner

Terimakasih =D

Contact person Owner:
wa.me/${numberowner} (Owner)

*donasi via follow ig juga boleh*`
  m.reply(anu)
}
handler.help = ['donasi', 'donate']
handler.tags = ['xp', 'info']
handler.command = /^(donasi|donate)$/i

module.exports = handler
