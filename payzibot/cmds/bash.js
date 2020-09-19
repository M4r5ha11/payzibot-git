exports.run = (client, message, args) => {
        const Discord = require('discord.js')
              if(message.author.id === "439079453650321409") {
try{
  let out = require('child_process').execSync(args.join(' ')).toString('utf8')
  message.channel.send(out ? out : 'no out.', { split: "\n", code: 'bash' })
  }catch (err){
    message.channel.send(err, { split: "\n", code: 'bash' })
  }}
       }
       exports.help = {
    name: "bash",
    aliases: ['shell'],
    info: "owner",
    usage: "bash (Linux-команда)",
    perm: "Developer",
    description: "Команда от имени консоли"
    }