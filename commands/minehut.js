exports.run = async (client, msg, args) => {
  const got = require('got');
  const { Client, RichEmbed } = require('discord.js');
  let config = require('../files/config.json')
  let API = config.API
  var response = await got(`${API}/network/simple_stats`)
  console.log('Normal: ' + response)
  var data = JSON.parse(response.body);
  console.log("String: " + data)
  var players = data.player_count
  var servers = data.server_count
  var servermax = data.server_max
  const embed = new RichEmbed()
      // Set the title of the field
      .setTitle('Minehut Stats')
      // Set the color of the embed
      .setColor(0x000000)
      // Set the main content of the embed
      .setDescription('Players Online: ' + players + '/0 \n Servers Online: ' + servers + '/' + servermax)
      .setFooter('  Provided By Minehut Bot');
    // Send the embed to the same channel as the message
  msg.channel.send(embed);
  console.log(embed)
}