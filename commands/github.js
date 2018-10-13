exports.run = async (client, msg, args) => {
  const { Client, RichEmbed } = require('discord.js');
  const embed = new RichEmbed()
  .setTitle('Github Repo')
  .setDescription('Click here to goto the Github Repo!')
  .setURL('https://github.com/wyattplayz/minehutbot')
  .setColor(0x000000)
  .setFooter('Provided By Minehut Bot');
  msg.channel.send(embed);
}