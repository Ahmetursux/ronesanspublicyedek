const Discord = module.require('discord.js');
const client = new Discord.Client();

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle('Rastgele kullanıcı;')
    .setDescription(message.guild.members.random().displayName)
    .setThumbnail(message.guild.members.random.avatarURL)
    .setFooter('R O N E S A N S')
    .setTimestamp()
    message.channel.send(embed).then(msg => {msg.delete(7000)});
}

exports.conf = {
  enabled: true,
    guildOnly: true,
  aliases: ['rastgelekullanici','çekilişyap'],
  permLevel: 0
};

exports.help = {
  name: 'çekiliş',
  description: 'Rastgele kullanıcı seçer , çekiliş yaparsınız.'
};