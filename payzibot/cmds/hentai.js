exports.run = async (client, message, args) => {
    const { MessageEmbed } = require('discord.js')
    if (!message.channel.nsfw) return message.reply('Данный канал не NSFW!')
    message.channel.send(new MessageEmbed()
        .setColor('#064f3b')
        .setTitle('**Рандомный хентай**')
        .setAuthor(message.author.tag, message.author.avatarURL(), message.author.url)
        .setImage(await require('node-fetch')(`https://nekobot.xyz/api/image?type=hentai`).then(r => r.json()).then(r => r.message)))
}
exports.help = {
    name: "hentai",
    aliases: [],
    info: "nsfw",
    usage: "hentai",
    description: "Рандомный хентай"
}
