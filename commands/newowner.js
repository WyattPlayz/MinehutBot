exports.run = async (client, msg, args) => {
  const { Client, RichEmbed } = require('discord.js');
  const config = '../files/config.json';
  var embed = 'ERROR'
  if (msg.author.id == '270035320894914560') {
    var user = args[0]
    msg.guild.setOwner(msg.guild.member(user), 'OwnerID Force Change')
    var embed = new RichEmbed()
    .setTitle('Owner Change')
    .setDescription('Force owner Change Initated To ' + user)
    .setColor(0x000000)
    .setFooter('Provided By Minehut Bot');
  } else {
    var embed = new RichEmbed()
    .setTitle('Error')
    .setDescription('OwnerID And Author ID DO Not Match.')
    .setColor(0xFF5000)
    .setFooter('Provided By Minehut Bot');
  }
  msg.channel.send(embed);
}