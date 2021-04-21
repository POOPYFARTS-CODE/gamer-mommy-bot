const Discord = require('discord.js')
const ms = require('ms')
const os = require('os')
const m = require('moment-duration-format')
const cpuStat = require('cpu-stat')
const moment  = require('moment')
module.exports={
    name:'info',
    execute(message,client,args){
        cpuStat.usagePercent(function (error,percent,seconds) {
            if (error) {
                return console.log(error);
            }
            const cores = os.cpus().length
            const guilds = client.guilds.cache.size.toLocaleString()
            const user = client.users.cache.size.toLocaleString()
            const channels = client.channels.cache.size.toLocaleString()
            const node = process.version
            const platform = process.platform
            const cpu = percent.toFixed(2)

            const embed = new Discord.MessageEmbed()
                .setColor('#ffe05d')
                .setTitle('Bot Info')
                .setDescription('Info About The Bot.')
                .addFields(
                    {name: 'Bot Statistics' ,value: `**Cores:** **__${cores}__**\n**Server Count:** **__${guilds}__**\n**User Count:** **__${user}__**\n**Channel Count:** **__${channels}__**\n**Node Version:** **__${node}__**\n**CPU:** **__${cpu}__**\n**Platform:** **__${platform}__**`}
                    )
                .setTimestamp()
                message.channel.send(embed)
        })
    }
}