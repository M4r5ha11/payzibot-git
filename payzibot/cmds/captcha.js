const { MessageAttachment } = require('discord.js')
exports.run = async (client, message, args) => {
    var max_chars = 17;
    var ddd = args.slice(0).join(" ");
    if (!args[0]) return ErrorEmbed(`укажите название каптчи`, message);
    if (ddd.length >= max_chars) return ErrorEmbed(`вы превысили лимит символов`, message);
    if(args.slice(0).join(" ") === 'Пэйз') return Pasxalka(`Каптча-П`, message)
    const Canvas = require("canvas"),
          canvas = Canvas.createCanvas(326, 475),
          ctx = canvas.getContext('2d'),
          background = await Canvas.loadImage('https://images-ext-2.discordapp.net/external/P2LwxgIitfPWrI1SsWtG0Z95IgNUTsFMZP6LhuMVDrc/https/media.discordapp.net/attachments/724181369789480960/726076495520333924/unknown.jpg');
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = '#74037b';
    ctx.strokeRect(0, 0, canvas.width, canvas.height);
    ctx.font = 'bold 25px BalsamiqSans';
    ctx.fillStyle = '#ffffff';
    ctx.fillText(`${args.slice(0).join(" ")}`, canvas.width / 13, canvas.height / 7);
    ctx.beginPath();
    ctx.arc(125, 150, 100, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.clip();
    message.channel.send(new MessageAttachment(canvas.toBuffer(), 'payzi_captcha.png'))     
}
exports.help = {
  name: 'captcha',
  aliases: ['capcha'],
  info: "photo",
  usage: "captcha (текст)",
  description: 'Бот отправит вам каптчу',
}
