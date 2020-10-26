exports.run = async (client, message, args) => {
    const Discord = require('discord.js')
    if (!message.channel.nsfw) return message.reply('Данный канал не NSFW!')
    let embed = new Discord.MessageEmbed()
        .setColor('#064f3b')
        .setTitle('**Рандомный хентай**')
        .setAuthor(message.author.tag, message.author.avatarURL(), message.author.url)
        .setImage(await require('node-fetch')(`https://nekobot.xyz/api/image?type=hentai`).then(r => r.json()).then(r => r.message))
    message.channel.send(embed)
}
exports.help = {
    name: "hentai",
    aliases: [],
    info: "nsfw",
    usage: "hentai",
    description: "Рандомный хентай"
}
