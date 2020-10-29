exports.run = async (client, message, args) => {
    const { MessageEmbed } = require('discord.js')
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return ErrorEmbed(`у вас недостаточно прав для выполнения данной команды!\nТребуемые права: \`Manage Messages\``, message)
    let poll = args.slice(0).join(' '),
        emoji = client.emojis.cache.find(emoji => emoji.id === "673806839263264768"),
        emoji2 = client.emojis.cache.find(emoji => emoji.id === "673806839292493844");
    if(!poll) return ErrorEmbed(`укажите вопрос`, message)
    let embed = new MessageEmbed()
       .setAuthor('Голосование', message.author.displayAvatarURL())
       .setDescription(poll)
       .setColor('RANDOM')
       .setFooter('Если вы хотите проголосовать, нажмите на нужную реакцию ниже')
    let m = await message.channel.send(embed)
    await m.react(emoji)
    await m.react(emoji2)
}
exports.help = {
    name: "poll",
    aliases: [],
    info: "general",
    usage: "poll (текст)",
    perm: "Manage Messages",
    description: "Провести опрос"
}
