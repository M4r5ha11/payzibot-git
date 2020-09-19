const Discord = require('discord.js')
const Minesweeper = require('discord.js-minesweeper')
exports.run = async (client, message, args) => {
    const r = parseInt(args[0]);
    const c = parseInt(args[1]);
    const m = parseInt(args[2]);
    if (!r) return ErrorEmbed(`укажите кол-во строк`, message);
    if (r > 12) return ErrorEmbed(`количество строк не может превышать \`12\``, message);
    if (!c) return ErrorEmbed(`укажите кол-во столбцов`, message);
    if (c > 12) return ErrorEmbed(`количество столбцов не может превышать \`12\``, message);
    if (!m)  return ErrorEmbed(`укажите кол-во мин`, message);
 
    const minesweeper = new Minesweeper({ 
rows: r,
columns: c,
mines: m,
emote: 'boom',
revealFirstCell: true});
    const matrix = minesweeper.start();
    let embed = new Discord.MessageEmbed()
    .setColor('#064f3b') 
    .setAuthor(`Сапёр для ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
    .setDescription(matrix)
    return matrix
      ? message.channel.send(embed)
      : ErrorEmbed(`произошла неизвестная ошибка, возможно вы ввели неверные данные`, message);

}
exports.help = {
  name: 'ms',
  aliases: ['minesweeper', 'minesweper', 'mine'],
  info: "game",
  usage: "ms (кол-во строк) (кол-во столбиков) (кол-во мин)",
  description: 'Мини-игра "Сапер" прямо в дискорде',
};