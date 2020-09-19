exports.run = (client, message, args) => {
        const Discord = require('discord.js')
        let on = message.guild.members.cache.filter(m => m.user.presence.status === "online").size
        let dnd = message.guild.members.cache.filter(m => m.user.presence.status === "dnd").size
        let idle = message.guild.members.cache.filter(m => m.user.presence.status === "idle").size
        let of = message.guild.members.cache.filter(m => m.user.presence.status === "offline").size
        let c = message.guild.channels.cache.filter(ch => ch.type == "category").size
        let t = message.guild.channels.cache.filter(ch => ch.type == "text").size
        let v = message.guild.channels.cache.filter(ch => ch.type == "voice").size
        let s = message.guild.channels.cache.filter(ch => ch.type == "store").size
        let n = message.guild.channels.cache.filter(ch => ch.type == "news").size
        let ema = message.guild.emojis.cache.filter(e => e.animated == true).size
        let emna = message.guild.emojis.cache.filter(e => e.animated == false).size
        let afkc = `${message.guild.afkChannel} | ${message.guild.afkChannelID}`
        if (afkc === `null | null`) afkc = `Отсутствует`
        let afkt = message.guild.afkTimeout/60
        let sysc = `${message.guild.systemChannel} | ${message.guild.systemChannelID}`
        if (sysc === `null | null`) sysc = `Отсутствует`
        let mfa = `Ошибка`
        if (message.guild.mfaLevel === 1) mfa = `Включён`
        if (message.guild.mfaLevel === 0) mfa = `Выключен`
        let  embed = new Discord.MessageEmbed()
        .setTitle('Информация о сервере "p"'.replace('p', message.guild.name))
        .setThumbnail(message.guild.iconURL({ dynamic: true }))
        .setDescription(`<:owner:674816490972905503> | Ролей - ${message.guild.roles.cache.size}\n<:off:673778760310456323> | Системный канал - ${sysc}\n<a:loading:673777314584199169> | 2FA - ${mfa}`)
        .addField ('Участники [b]'.replace('b', message.guild.memberCount), `<:member:732128945365057546> | Пользователей - ${message.guild.members.cache.filter(m => m.user.bot === false).size}\n<:payzi_bot:732119152755474444> | Ботов - ${message.guild.members.cache.filter(m => m.user.bot === true).size}\n<:online:674463345625268225> | Онлайн - ${on}\n<:dnd:674463406983610410> | Не беспокоить - ${dnd}\n<:idle:674463345927258152> | Не активны - ${idle}\n<:offline:674463290755252277> | Не в сети - ${of}`,true)
        .addField ('Каналов [k]'.replace('k', message.guild.channels.cache.size), `<:setting:673777669728501761> | Категорий - ${c}\n<:channel:732125684259881052> | Текстовых - ${t}\n<:voice:732128155418099733> | Голосовых - ${v}`,true)
        .addField ('Эмодзи [e]'.replace('e', message.guild.emojis.cache.size), `:map: | Не анимированные - ${emna}\n<a:minecraft:673777315712466954> | Анимированные - ${ema}`)
        .addField ('Владелец', `${message.guild.owner} (${message.guild.ownerID})`,true)
        .addField ('Регион', `${message.guild.region}`,true)
        .addField ('АФК', `<:discord:674463407159771146> | Канал - ${afkc}\n<:muted:674818209979039775> | ТаймАут - ${afkt} минут`)
        .addField ('Бусты', `<:server_boost:732128945335697488> | Количество - ${message.guild.premiumSubscriptionCount}\n<:nitro_boost:732128945553539122> | Уровень буста - ${message.guild.premiumTier}`)
        .setColor('#064f3b')
        message.channel.send(embed)
       }
       exports.help = {
    name: "server",
    aliases: ['guild', 'serverinfo', 'guildinfo'],
    info: "stat",
    usage: "server",
    description: "Информация о сервере"
    }