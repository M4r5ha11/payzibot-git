const Discord = require('discord.js');
const fs = require("fs");
const client = new Discord.Client();
global.ErrorEmbed = require('./functions/error.js')(client)
global.WaitEmbed = require('./functions/wait.js')(client)
global.Pasxalka = require('./functions/top.js')(client)
const DBL = require("dblapi.js");
const dbl = new DBL('ключ', { statsInterval: 3600000 }, client);
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Payzi:payzi@payzidiscord.b2rpx.mongodb.net/Data', {useNewUrlParser: true, useUnifiedTopology: true})
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

fs.readdir("./cmds/", (err, files) => {

    if(err) console.log(err)

    let jsfile = files.filter(f => f.split(".").pop() === "js") 
    if(jsfile.length <= 0) {
         return console.log("[LOGS] Couldn't Find Commands!");
    }

    jsfile.forEach((f, i) => {
        let pull = require(`./cmds/${f}`);
        client.commands.set(pull.help.name, pull);  
        pull.help.aliases.forEach(alias => {
            client.aliases.set(alias, pull)
        });
    });
});
process.on('exit', (code) => {
    require('child_process').execSync('npm start').toString('utf8')
  console.log('я не запущен');
});
client.on("ready", () =>{
  client.setMaxListeners(111)
  console.log(client.user.tag) 
        dbl.postStats(client.guilds.size);
client.user.setActivity('на говнокод', { type: 'WATCHING'});
  client.channels.cache.get("723519373922402325").send(`Успешный запуск!\nСерверов: ${client.guilds.cache.size}\nСтатус установлен`)
})
dbl.on('posted', () => {
client.channels.cache.get("737622272805830747").send(`:white_check_mark: | Статистика на top.gg была загружена успешно`)
})
dbl.on('error', e => {
 client.channels.cache.get("737622272805830747").send(`:x: | Статистика на top.gg была загружена неккоректно\nОшибка: ${e}`)
})
client.on('message', message => {
      if (message.channel.type === "dm") return;
const User = require('./db/user.js')
const Guild = require('./db/guild.js')
const prefix = "p."
if (!message.content.startsWith(prefix)) return;
    if (message.author.bot) return;
  const args = message.content
      .slice(prefix.length)
      .trim()
      .split(/ +/g);
    let command = args.shift().toLowerCase();
let cmd = client.commands.get(command) || client.commands.find(cmd => cmd.help.aliases && cmd.help.aliases.includes(command));
    if (!cmd) return;
    cmd.run(client, message, args);
})
client.on("guildCreate", guild => {
    let embed = new Discord.MessageEmbed()
      .setTitle("Новый сервер")
      .setColor("#054f3b")
      .addField("Название сервера", guild.name)
      .addField("Количество серверов бота", client.guilds.cache.size);
    client.channels.cache.get("723518800644931655").send(embed);
});
client.on("guildDelete", guild => {
    let embed = new Discord.MessageEmbed()
      .setTitle("Меня удалили")
      .setColor("#054f3b")
      .addField("Название сервера", guild.name)
      .addField("Количество серверов бота", client.guilds.cache.size);
    client.channels.cache.get("723518800644931655").send(embed);
});
client.login('токен');