const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  let prefix =
    (await require("quick.db").fetch(`prefix_${message.guild.id}`)) ||
    ayarlar.prefix;
  if (!message.member.hasPermission("MANAGE_GUILD"))
    return message.reply(
      "RONESANS | Bu komutu kullanabilmek için `Yönetici` iznine sahip olmalısın!"
    );
  let panel = await db.fetch(`sunucupanel_${message.guild.id}`);
  let rekoronline = await db.fetch(`panelrekor_${message.guild.id}`);
  if (args[0] === "sil" || args[0] === "kapat") {
    db.delete(`sunucupanel_${message.guild.id}`);
    db.delete(`panelrekor_${message.guild.id}`);
    try {
      //efe
      message.guild.channels
        .find(x => x.name.includes("RONESANS İSTATİSTİK"))
        .delete();
      message.guild.channels
        .find(x => x.name.includes("Toplam Sanatçı ▸"))
        .delete();
      message.guild.channels.find(x => x.name.includes("Aktif Sanatçı ▸ ")).delete();
      message.guild.channels.find(x => x.name.includes("Sanat Fedaileri ▸ ")).delete();
      message.guild.channels
        .find(x => x.name.includes("En Yüksek Aktiflik ▸"))
        .delete();
    } catch (e) {}
    message.channel.send(
      `Ayarlanan sunucu paneli başarıyla devre dışı bırakıldı!`
    );
    return;
  } //Efe
  if (panel)
    return message.channel.send(
      `Bu sunucuda panel zaten ayarlanmış! Devredışı bırakmak için;  \`${prefix}sunucupanel sil\``
    );
  message.channel
    .send(
      new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle("RONESANS İSTATİSTİK SİSTEMİ")
        .setDescription("Ronesans gerekli kanalları oluşturmak üzere!")
        .setFooter('Onaylıyorsan 15 saniye içerisinde "evet" yazmalısın.')
    )
    .then(() => {
      message.channel
        .awaitMessages(response => response.content === "evet", {
          max: 1,
          time: 15000,
          errors: ["time"]
        })
        .then(collected => {
          db.set(`sunucupanel_${message.guild.id}`, message.guild.id);
          try {
            let role = message.guild.roles.find("name", "@everyone");
            message.guild.createChannel(
              `${client.user.username} ▸ RONESANS İSTATİSTİK`,
              "category",
              [{ id: message.guild.id, deny: ["CONNECT"] }]
            );
            message.guild
              .createChannel(
                `Toplam Sanatçılar ▸ ${message.guild.members.size}`,
                "voice"
              )
              .then(channel =>
                channel.setParent(
                  message.guild.channels.find(
                    channel =>
                      channel.name === `${client.user.username} ▸ RONESANS İSTATİSTİK`
                  )
                )
              )
              .then(c => {
                c.overwritePermissions(role, {
                  CONNECT: false
                });
              });
            message.guild
              .createChannel(
                `Aktif Sanatçılar ▸ ${
                  message.guild.members.filter(
                    off => off.presence.status !== "offline"
                  ).size
                }`,
                "voice"
              )
              .then(channel =>
                channel.setParent(
                  message.guild.channels.find(
                    channel =>
                      channel.name === `${client.user.username} ▸ RONESANS İSTATİSTİK`
                  )
                )
              )
              .then(c => {
                c.overwritePermissions(role, {
                  CONNECT: false
                });
              });
            message.guild
              .createChannel(
                `Ronesans Fedaileri ▸ ${
                  message.guild.members.filter(m => m.user.bot).size
                }`,
                "voice"
              )
              .then(channel =>
                channel.setParent(
                  message.guild.channels.find(
                    channel =>
                      channel.name === `${client.user.username} ▸ RONESANS İSTATİSTİK`
                  )
                )
              )
              .then(c => {
                c.overwritePermissions(role, {
                  CONNECT: false
                });
              });
            message.guild
              .createChannel(
                `En Yüksek Aktiflik ▸ ${
                  message.guild.members.filter(
                    off => off.presence.status !== "offline"
                  ).size
                }`,
                "voice"
              )
              .then(channel =>
                channel.setParent(
                  message.guild.channels.find(
                    channel =>
                      channel.name === `${client.user.username} ▸ RONESANS İSTATİSTİK`
                  )
                )
              )
              .then(c => {
                c.overwritePermissions(role, {
                  CONNECT: false
                });
              }); //Efe
            db.set(
              `panelrekor_${message.guild.id}`,
              message.guild.members.filter(
                off => off.presence.status !== "offline"
              ).size
            );
            message.channel.send(
              `Ronesans siz sanat severler için tüm oda ayarlarını hazırladı!  \`(Oda isimlerini değiştirmeyin, çalışmaz!)\``
            );
          } catch (e) {
            console.log(e.stack);
          }
        });
    });
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["sunucu-panel"],
  permLevel: 3
};
exports.help = {
  name: "kurulum",
  description:
    "Sunucu İstatistiklerini Gösteren Panel Kurar Ve Sürekli Olarak Günceller.",
  usage: "sunucupanel",
  kategori: "yetkili"
};
