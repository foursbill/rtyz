
// - Ubah nomor owner dan wm di sini.
// + Daftar apikey terlebih dahulu sebelum menggunakan svript ini link
//https://api.betabotz.eu.org
//https://api.botcahx.eu.org
// - Jika sudah mendaftar salin key yang ada di profie dan paste di global.lann && global.btc
// - Contoh global.btc = 'ngaksk?'//register di https://api.botcahx.live
// - Contoh global.lann = 'Ntahla' //register key di https://api.betabotz.org
// - Jika sudah maka lanjutkan untuk mengubah nomor owner dan wm.


// List Key 
// Betabotz = digunakan hampir di semua fitur kecuali linkshort
// Botcahx  = digunakan untuk linkshort saja ( optional )

global.owner = ['6285748600473']  
global.mods = ['6285748600473'] 
global.prems = ['6285748600473']
global.nameowner = 'xCez'
global.numberowner = '6285748600473' 
global.mail = 'fxacbapi.my.id@gmail.com' 
global.dana = '6285758699473'
global.pulsa = '6285748600473'
global.gopay = '6285748600473'
global.namebot = 'KNMOD-MD'
global.gc = '-'
global.web = 'https://github.com/foursbill'
global.instagram = 'https://instagram.com/jamer.1140'
global.wm = 'Anjayyy'
global.watermark = wm
global.wm2 = '⫹⫺ KN Bot'
global.wm3 = '© knxd'
global.wm4 = 'made by Kurodenshiii'
global.wait = '_*Tunggu sedang di proses...*_'
global.eror = '_*Server Error*_'
global.benar = 'Benar ✅\n'
global.salah = 'Salah ❌\n'
global.stiker_wait = '*⫹⫺ Stiker sedang dibuat...*'
global.packname = 'Made with'
global.author = 'Bot WhatsApp'

//---- image thumbnail 
global.thumb = 'https://telegra.ph/file/f5bd6118c7f58ec56607c.jpg'

//===> Apikey
global.lann = 'sJqhyKH9' //isi apikey mu https://api.betabotz.eu.org
global.btc = 'cwLXEgJQ'//Isi apikey di https://api.botcahx.eu.org
global.APIs = {   
  lann: 'https://api.betabotz.eu.org',
  btc: 'https://api.botcahx.eu.org'
}
global.APIKeys = { 
  'https://api.betabotz.org': 'pwWmY59q' //isi apikey mu https://api.betabotz.org
}

global.multiplier = 45
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      sampah: '🗑',
      armor: '🥼',
      sword: '⚔️',
      kayu: '🪵',
      batu: '🪨',
      string: '🕸️',
      kuda: '🐎',
      kucing: '🐈' ,
      anjing: '🐕',
      petFood: '🍖',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
