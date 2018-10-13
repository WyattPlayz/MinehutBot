exports.run = async (client, msg, args) => {
  const got = require('got');
  const { Client, RichEmbed } = require('discord.js');
  let config = require('../config.json')
  let API = config.API
  const embed = new RichEmbed()
  .setTitle('Minehut Login')
  .setColor(0xFF5000)
  .setDescription('Click Here To Access The Login Page')
  .setURL('https://minehut.glitch.me/login')
  .setFooter('Provided By Minehut Bot');
  
  msg.channel.send(embed)
}