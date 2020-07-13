const Discord = require('discord.js');

let botid = ('581090432092733450') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(`${client.user.username} Yetkili Komutları`)
    .addField('r!giriş-çıkış-ayarla [#kanal]', 'Herhangi Bir Kişi Sunucuya Giriş veya Çıkış yaptığında belirlenen kanala yazar.')//ne kadar yetkili komutunuz varsa o kadar .addField('prefix+komut', 'açıklama/kullanım amacı') koyun
    .addField('r!capslock-engelleme [aç/kapat]', 'Bu Özellik Açıldığında Sunucudaki Büyük Harf kullaısmını engeller.')
    .addField('r!mod-log-ayarla [#kanal]', 'Belirtilen Kanal Sunucuda Gerçekleşen Eylemlerin Hepsi Kaydedilir.')
    .addField('r!reklam-taraması', 'Sunucudaki Üyelerin Oynuyor kısmında Reklam yapıp yapmadığını inceler.')
    .addField('r!reklamengelle [aç/kapat]', 'Sunucuda Reklam Yapılmasını Engeller.')
    .addField('r!tag [tag]', 'Bu Özellık Sayesinde Yeni Gelenlerin İsminin Başına Belirlediğiniz Tag`ı Ayarlarsınız.')
    .addField('r!sayaç-ayarla [#kanal]', 'Sunucunuzda Belirlediğiniz hedefe kaç kişi kaldığını gösterir.')
    .addField('r!sayaç-sıfırla', 'Sayaç Özelliğini Devre Dışı bırakır.')
    .addField('r!ses-kanal-aç', 'Ses Kanalı Açar')
    .addField('r!metin-kanal-aç', 'Metin Kanalı Açar')
    .addField('r!temizle', 'Belirtilen Kadar Mesaj Siler')
    .addField('r!rol-ver', 'Rol Verir')
    .addField('r!oylama', 'Oylama yapar')
    .addField('r!kick', 'Kick Atar')
    .addField('r!ban', 'Ban Atar')  
    .addField('r!unban', 'Ban Kaldırır')
    .addField(`» Linkler`, `[Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=${botid}&scope=bot&permissions=8) **|** [Destek Sunucusu](https://discord.gg/ge3bD5y) **|** [Bota Oy Ver (Vote)](https://discordbots.org/bot/${botid}/vote) **|** [Web Sitesi](ronesansbot.com)`)//websiteniz yoksa  **|** [Web Sitesi]() yeri silebilirsiniz
    message.channel.sendEmbed(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'yetkili2sds',
  description: '',
  usage: ''
};