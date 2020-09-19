module.exports = (client) => async function ErrorEmbed(msg, message){
    const Discord = require('discord.js');
let embed = new Discord.MessageEmbed()
.setColor('#054f3b')
.setAuthor(`Пасхалка`,'https://media.discordapp.net/attachments/695277643360239616/745584175373090886/hypeshiny.gif')   
.setDescription(`**${message.author.username}**, вы нашли пасхалку \`${msg}\``)
.setTimestamp()
message.channel.send(embed)
}