module.exports={
    name: 'nuke',
    execute(message,client,args){
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You Dont Have Enought Perms To Use This Command") 
        if (!message.guild.me.hasPermission("ADMINISTRATOR")) return message.channel.send("I Dont Have Enought Perms!") 

        message.channel.clone().then(channel => {
            channel.setPosition(message.channel.position)

            channel.send('>>> Nuked This Channel!\nhttps://tenor.com/bgOFe.gif').then(message => {
                message.delete({timeout: 10000})
            })
        })
        message.channel.delete()
    }
}