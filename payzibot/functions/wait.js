module.exports = (client) => async function ErrorEmbed(msg, message){
    const Discord = require('discord.js');
let embed = new Discord.MessageEmbed()
.setColor('#808080')
.setAuthor(`Задержка`,'https://media.discordapp.net/attachments/695277643360239616/745518281095381093/hotpng.com.png?width=427&height=427 ')   
.setDescription(`**${message.author.username}**, данная команда имеет задержку, пожалуйста, подождите ${msg}`)
.setTimestamp()
message.channel.send(embed)
//.setDescription(`**${message.author.username}**, данная команда имеет задержку, пожалуйста, подождите \`30\`секунд`)
}