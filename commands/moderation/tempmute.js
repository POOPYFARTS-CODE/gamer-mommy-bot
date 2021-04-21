const ms = require('ms')
module.exports={
    name:'tempmute',
    aliases: ['tmute'],
    async execute(message,client,args){
        let mutedRole = message.guild.roles.cache.find(
            (role) => role.name === 'Muted'
           );
        const target = message.mentions.members.first();
        if(!target)return message.reply(`Couldn't Find The User!`)
        if (target.hasPermission("MANAGE_MESSAGES")) {
            return message.reply("Can't Mute Them!")
        }
        //mute role creation
        if(!mutedRole){
            try {
                mutedRole = await message.guild.roles.create({
                    data:{
                    name: "Muted",
                    color: "#000000",
                    permission: []
                    }
                })
                message.guild.channels.cache.forEach(async(channel,id)=>{
                    await channel.updateOverwrite(mutedRole,{
                        SEND_MESSAGES: false,
                        ADD_REACTIONS: false,
                        CONNECT: false
                    })
                })
            } catch (e) {
                console.log(e.stack);
            }
        }
        //end
        let muteTime = args[1]
        if(!muteTime)return message.reply('No Time Specified!')

        target.roles.add(mutedRole)
        message.channel.send(`**${target}Was muted for ${args[1]}**`)

        setTimeout(function(){
            target.roles.remove(mutedRole);
            message.channel.send(`${target.id} has been unmuted!`)
        },ms(muteTime));
        //end of code!
    }
}