const Discord = require('discord.js');
exports.run = function(client, message) {
 const embed = new Discord.RichEmbed()
  .setThumbnail("https://cdn.discordapp.com/avatars/720985933662650421/7093dc2b84c4ac60db8919ba91120fc8.png?size=2048")
    .setColor('RÖNESANS 2020 BOT İstatistik')
    .addField(' Gecikme', client.ping + 'ms')
    .addField(' Kullanıcılar', client.guilds.reduce((a, b) => a + b.memberCount, 0))
    .addField(' Kanallar', client.channels.size)
    .addField(' Sunucular', client.guilds.size)
    .addField(' Bellek Kullanımı', (process.memoryUsage().heapUsed / 2048 / 2048).toFixed(2))
    .addField(' Kütüphanesi', `Discord.js`)
    .addField(' Yapımcım', '<@524939485688102922>')
    .addField(' RÖNESANS BOT SÜRÜMÜ ', 'V1')
  message.channel.send(embed);
};
exports.conf = {
  enabled: true, 
  guildOnly: false,
  aliases: ['botbilgi','stat','istatistik'], 
  permLevel: 0 
};
exports.help = {
  name: 'istatistik', 
  description: 'Botun İstatiğini Atar',
  usage: 'istatistik' 
};
