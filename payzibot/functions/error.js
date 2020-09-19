module.exports = (client) => async function ErrorEmbed(msg, message){
    const Discord = require('discord.js');
let embed = new Discord.MessageEmbed()
.setColor('#d31f1f')
.setAuthor(`Ошибка`,'https://cdn.discordapp.com/emojis/695541716760920086.gif?v=1')   
.setDescription(`**${message.author.username}**, ${msg}`)
.setTimestamp()
message.channel.send(embed)
}