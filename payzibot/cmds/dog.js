exports.run = (client, message, args) => {
    const { MessageEmbed } = require('discord.js')
    require('axios')('https://dog.ceo/api/breeds/image/random').then(async res => {
        message.channel.send(new MessageEmbed().setColor('#064f3b').setTitle('**Рандомный пёс**').setAuthor(message.author.tag, message.author.avatarURL(), message.author.url).setImage(res.data.message))
    })
}
exports.help = {
    name: "dog",
    aliases: [],
    info: "photo",
    usage: "dog",
    description: "Фото собаки"
}
