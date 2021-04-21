const Discord = require('discord.js');
module.exports={
    name:'help',
    execute(message,args){
        const embed = new Discord.MessageEmbed()
            .setColor('#ffe05d')
            .setTitle('**__Help Menu__**')
            .setDescription('Help Menu For The Bot.')
            .addFields(
                {name: 'Commands' ,value: '**1. Moderation**\n`gm help-mod`\n**2. Utility**\n`gm help-util`'}
            )
            message.author.send(embed).then(message.react('👍'))
                     .catch(() => message.channel.send("Your DM's Are Closed!",embed) ,message.reactions.removeAll())
    }
}