const Discord = require('discord.js');
const loglar = require('../loglar.json');

var prefix = loglar.prefix;

exports.run = async (client, message, params, args) => {

  const yardım = new Discord.RichEmbed()
  .setColor(0x36393E)
      .setAuthor(`RONESANS`, client.user.avatarURL)
      .setThumbnail(client.user.avatarURL)
      .addField('``RONESANS BOT  - Yardım``',  ' \n :white_small_square:  **r!yetkili**: Sunucuyu yönetmek için gerekli olan komutlar! \n :white_small_square:  **r!kullanıcı** Kullanıcılar İçin Gerekli Komutlar!')
      .setFooter(`${message.author.username} tarafından istendi.`, message.author.avatarURL)
  return message.channel.sendEmbed(yardım);

};


  
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['komut', 'komutlar', 'command', 'yardım', 'help', 'halp', 'y', 'h', 'commands'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'yardım',
    description: 'yardım',
    usage: 'yardım'
  };