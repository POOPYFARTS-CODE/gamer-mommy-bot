const Discord = require('discord.js')
module.exports={
    name: 'invite',
    aliases: ["inv"],
    execute(message,args){
        const embed = new Discord.MessageEmbed()
        .setTitle('Invite Me!')
        .setURL('https://discord.com/oauth2/authorize?client_id=833551632363946084&scope=bot&permissions=8')
        .setColor('#ffe05d')
        message.channel.send(embed)
    }
}