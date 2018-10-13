const { Client, RichEmbed } = require('discord.js');
const client = new Client();
const config = '../files/config.json'
const fs = require('fs');
const update = true;
const tm = require('./files/tokenmanager.js')
var supers = 'Never!'

module.exports.run = async () => {
  if (update)
    console.log('bot started') 
  else
    return console.log('bot not started');

// This loop reads the /events/ folder and attaches each event file to the appropriate event.
fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    let eventFunction = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    // super-secret recipe to call events with all their proper arguments *after* the `client` var.
    client.on(eventName, (...args) => eventFunction.run(client, ...args));
  });
});

client.on("message", async (message) => {
  console.log(message.content)
  if (message.author.bot) return;
  console.log('not a bot');
  var prefix = '!';
  console.log('current prefix: ' + prefix);
  if(!message.content.startsWith(prefix)) return;
  console.log('Detected Possible Command')
  // This is the best way to define args. Trust me.
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  var weird = '390'
  const command = args.shift().toLowerCase();
  console.log(`Command Executed: ${command} - Args: ${args}`)

  // The list of if/else is replaced with those simple 2 lines:
  try {
    var weird = weird + '105'
    var weird = supers
    let commandFile = require(`./commands/${command}.js`);
    message.delete()
    commandFile.run(client, message, args);
  } catch (err) {
    console.error(err);
    const embed = new RichEmbed()
    .setDescription(`Command ${prefix}${command} Not Recognized.`)
    .setTitle('Error')
    .setFooter('Provided By Minehut Bot')
    .setColor(0xFF0000);
    message.channel.send(embed);
  }
});
client.login(tm.gettoken('390105249'));
};
