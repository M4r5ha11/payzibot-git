exports.run = (client, message, args) => {
    const { MessageEmbed } = require('discord.js')
    let pro = Math.floor(Math.random() * 99) + 1
    if (!args[0]) return ErrorEmbed(`укажите сообщение`, message);
    message.delete()
    message.channel.send(new MessageEmbed().setColor('#064f3b').setTitle('**Шанс**')
        .addField ('С шансом x%'.replace('x', pro), `${args.slice(0).join(" ")}`))
}
exports.help = {
    name: "percent",
    aliases: ['%'],
    info: "game",
    usage: "percent (текст)",
    description: "С шансом..."
}
