  const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

let botid = ('581090432092733450') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        .setAuthor(`${client.user.username} `, client.user.avatarURL)
        .setColor('0x36393E')
        .setTitle(`__**Kullanıcı Komutları !**__`)
        .addField(`RONESANS`,` Hemen [Ekle](https://discord.com/oauth2/authorize?client_id=581090432092733450&scope=bot&permissions=2146958847)`)
        .setDescription(`yetkilerim , roller , rolinfo , kullanıcıbilgim , hastebin , saat , sunucuikon , rastgele-kullanıcı`)
        .setThumbnail(client.user.avatarURL)
        .addField(`» Linkler`, `[Bot Davet Linki](https://discord.com/oauth2/authorize?client_id=581090432092733450&scope=bot&permissions=2146958847) **|** [Destek Sunucusu](https://discord.gg/vR3DH24) **|** [Bota Oy Ver (Vote)](https://discordbots.org/bot/${botid}/vote) **|** [Web Sitesi](https://ronesansbot.com)`)//websiteniz yoksa  **|** [Web Sitesi]() yeri silebilirsiniz
        .setFooter(`${message.author.username} Tarafından İstendi.| prefix r!`, message.author.avatarURL)
    return message.channel.sendEmbed(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'kullanıcı',
  description: '',
  usage: ''
};
   
