exports.run = async (client, guild) => {
  const { Client, RichEmbed } = require('discord.js');
  const fs = require('fs');
  const MuteFile = `../mutes/${guild.id}.json`;
  fs.writeFile(MuteFile, '{}', function (err) {
  if (err) throw err;
  console.log('Saved!');
  });
};