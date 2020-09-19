exports.run = (client, message, args) => {
        const Discord = require('discord.js')
            if (!message.member.hasPermission("MANAGE_CHANNELS")) return ErrorEmbed(`у вас недостаточно прав для выполнения данной команды!\nТребуемые права: \`Manage Channels\``, message)
      if (!args[0]) return ErrorEmbed(`укажите тему канала`, message);
        message.channel.setTopic(`${args.slice(0).join(" ")}`)
  .then(newChannel => message.reply(`Вы установили "тему" канала на ${newChannel.topic}`))
  .catch(console.error);
       }
       exports.help = {
    name: "topic",
    aliases: [],
    info: "mod",
    usage: "topic (текст)",
    perm: "Manage Channels",
    description: "Изменить тему канала в котором вы написали команду"
    }