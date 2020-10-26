exports.run = (client, message, args) => {
    const Discord = require('discord.js')
    const prefix = 'ps.'
    let p = prefix
    let help = new Discord.MessageEmbed()
        .setTitle('Команды PayziBot')
        .setDescription('Префикс — ``p``'.replace('p', p))
        .addField ('Основные', `p.help`)
        //.addField ('Настройки', '`config`')
        .addField ('Модерация', `p.ban`)
        .addField ('Статистика', `bot, user`)
        .addField ('Фото', `p.photo`)
        .addField ('NSFW', `p.nsfw`)
        .addField ('Игровые', `p.game`)
        .setFooter('Дополнительная информация: p.help (команда)')
        .setColor('#064f3b');
    if(args[0]) {
        let command = args[0];
        if(client.commands.has(command)) {            
            command = client.commands.get(command);
            var embed = new Discord.MessageEmbed()
            .setTitle('Команда: `cmd`'.replace('cmd', command.help.name))
            .setDescription(`**Описание:** ${command.help.description || "Для данной команды нет описания!"}\n**Использование:** ${p}${command.help.usage || "Для данной команды нет использования!"}\n**Требуемые права:** ${command.help.perm || "Для данной команды не требуются права!"}`)
        message.channel.send(embed);
    } else {
      message.channel.send(help)
    }
}
exports.help = {
    name: "help",
    aliases: ['?'],
    info: "general",
    usage: "help (команда)",
    description: "Помощь по командам"
}
