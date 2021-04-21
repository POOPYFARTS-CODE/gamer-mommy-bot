const Discord = require('discord.js');
module.exports={
    name:'help-mod',
    aliases: ['mod-help', 'mod help'],
    execute(message,args){
        const embed = new Discord.MessageEmbed()
            .setColor('#ffe05d')
            .setTitle('**__Moderation Help Menu__**')
            .setDescription('Moderation Help Menu')
            .addFields(
                {name: 'Commands' ,value: '**1. Ban Command**\n`gm ban <user_to_ban>`\n**2. Unban Command**\n`gm unban <id_of_user_to_unban>`\n**3. Mute**\n`gm mute <user_to_mute>`\n**4. Tempmute**\n`gm tmute <user_to_mute> <duration_of_the_mute>`\n**4. Unmute**\n`gm unmute <user_to_unmute>`\n**7. Nuke**\n`gm nuke`'}
            )
            message.channel.send(embed).then(message.react('👍'))
    }
}