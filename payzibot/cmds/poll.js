exports.run = (client, message, args) => {
        const Discord = require('discord.js')
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return ErrorEmbed(`у вас недостаточно прав для выполнения данной команды!\nТребуемые права: \`Manage Messages\``, message)
    let poll = args.slice(0).join(' ')
    let emoji = client.emojis.cache.find(emoji => emoji.id === "673806839263264768")
    let emoji2 = client.emojis.cache.find(emoji => emoji.id === "673806839292493844")
    if(!poll) return ErrorEmbed(`укажите вопрос`, message)
let embed = new Discord.MessageEmbed()
.setAuthor('Голосование', message.author.displayAvatarURL())
.setDescription(poll)
    .setColor('RANDOM')
    .setFooter('Если вы хотите проголосовать, нажмите на нужную реакцию ниже')
    message.channel.send({ embed }).then((message) => {
        message.react(emoji)
            .then(() => message.react(emoji2))
        });
       }
       exports.help = {
    name: "poll",
    aliases: [],
    info: "general",
    usage: "poll (текст)",
    perm: "Manage Messages",
    description: "Провести опрос"
    }