const { MessageAttachment } = require('discord.js')
exports.run = async (client, message, args) => {
    const Canvas = require("canvas")
    if (!args[0]) return ErrorEmbed(`укажите сообщение! Эмодзи и упоминания не работают`, message);
    const canvas = Canvas.createCanvas(466, 600);
    const ctx = canvas.getContext('2d');
    const background = await Canvas.loadImage('https://st.depositphotos.com/1427101/4343/v/450/depositphotos_43433745-stock-illustration-%D1%82%D0%B5%D1%82%D1%80%D0%B0%D0%B4%D0%BD%D0%BE%D0%B9-%D0%B1%D1%83%D0%BC%D0%B0%D0%B3%D0%B8-%D1%81-%D0%BB%D0%B8%D0%BD%D0%B8%D1%8F%D0%BC%D0%B8.jpg');
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = '#74037b';
    ctx.strokeRect(0, 0, canvas.width, canvas.height); 
    ctx.font = '27px BalsamiqSans';
    ctx.fillStyle = '#000000';
    ctx.fillText(`${args.slice(0).join(" ")}`, canvas.width / 7, canvas.height / 17);
    ctx.beginPath();
    ctx.arc(125, 150, 100, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.clip();    
    message.channel.send(new MessageAttachment(canvas.toBuffer(), 'payzi_notebook.png')) 
}
exports.help = {
  name: 'notebook',
  aliases: [],
  info: "photo",
  usage: "notebook (текст)",
  description: 'Бот напишет в тетради ваш текст',
}
