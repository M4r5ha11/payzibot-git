exports.run = (client, message, args) => {
        const Discord = require('discord.js')
            if (!message.member.hasPermission("MANAGE_MESSAGES")) return ErrorEmbed(`у вас недостаточно прав для выполнения данной команды!\nТребуемые права: \`Manage Messages\``, message)
      if (!args[0]) return ErrorEmbed(`укажите сообщение`, message);
        message.channel.send(`${args.slice(0).join(" ")}`)
       }
       exports.help = {
    name: "say",
    aliases: [],
    info: "mod",
    usage: "say (текст)",
    perm: "Manage Messages",
    description: "Отправить сообщение от имени бота"
    }
//#36393f