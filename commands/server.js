exports.run = async (client, msg, args) => {
  const { Client, RichEmbed } = require('discord.js');
  const config = '../files/config.json';
  const got = require('got');
  var server = args[0]
  var response = got(`${config.API}/servers/${server}?byName=true`)
  var data = JSON.parse(response.body)
  if (!server) {
    var embed = new RichEmbed()
    .setTitle('Error')
    .setDescription('Please specify a server name.')
    .setColor(0xFF0000)
    .setFooter('Provided By Minehut Bot');
    msg.channel.send(embed);
    return;
  } else {
    var embed = new RichEmbed()
    .setTitle('Minehut Server Infomation')
    .setDescription('Name: ' + data.name + '\n\ IP: ' + data.name_lower + '.minehut.gg \n\ MOTD: ' + data.motd)
    .setColor(0x000000)
    .setFooter('Provided By Minehut Bot');
    msg.channel.send(embed);
    return;
  }
}