exports.run = (client, message, args) => {
    const { MessageEmbed } = require('discord.js')
    require('axios')('http://aws.random.cat/meow').then(async res => {
        message.channel.send(new MessageEmbed().setColor('#064f3b').setTitle('**Рандомный кот**').setAuthor(message.author.tag, message.author.avatarURL(), message.author.url).setImage(res.data.file))
    })
}
exports.help = {
    name: "cat",
    aliases: [],
    info: "photаo",
    usage: "cat",
    description: "Фото кота/кошки"
}
