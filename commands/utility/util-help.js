const Discord = require('discord.js');
module.exports={
    name:'help-util',
    execute(message,args){
        const embed = new Discord.MessageEmbed()
            .setColor('#ffe05d')
            .setTitle('**__Utility Help Menu__**')
            .setDescription('Utility Help Menu')
            .addFields(
                {name: 'Commands' ,value: '**1. Info**\n`gm info`\n**2. My Info**\n`gm myinfo`\n**3. Userinfo**\n`gm userinfo <mention>`\n**4. Serverinfo**\n`gm serverinfo`'}
            )
            message.author.send(embed).then(message.react('👍'))
                     .catch(() => message.channel.send("Your DM's Are Closed!",embed))
    }
}