const { MessageEmbed } = require('discord.js')
exports.run = (client, message, args) => {
    let member = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]))
    let argsUser = member.user || message.author
    message.channel.send(new MessageEmbed()
        .setAuthor(`Искал ${message.author.username}`, message.author.avatarURL({ dynamic: true }))
        .addField('Аватарка', `[Ссылка](${argsUser.avatarURL({ dynamic: true, size:  })})`)
        .setImage(argsUser.avatarURL({ dynamic: true, size: 4096 }))
        .setColor('#064f3b'))
}
exports.help = {
    name: "avatar",
    aliases: ['ava', 'avatarka', 'displayavatar'],
    info: "photo",
    usage: "avatar (пользователь)",
    description: "Получить аватарку упомянутого пользователя"
}
