
module.exports={
    name:'unmute',
    execute(message,client,args){
        const mutedRole = message.guild.roles.cache.find(
            (role) => role.name === 'Muted'
           );
           const target = message.mentions.members.first();
           target.roles.remove(mutedRole);
           message.channel.send(`${target} Were unmuted!`)
    }    
}
