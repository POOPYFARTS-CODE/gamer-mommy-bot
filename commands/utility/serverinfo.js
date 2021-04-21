module.exports = {
    name: "serverinfo",
    description: "ServerInfo!",
    execute(message, args){
      const avatar = message.author.displayAvatarURL()
      message.channel.send({
        embed: {
          color: '#ffe05d',
          title: `Server Information`,
          description: `The Server Name Is **${message.guild.name}** with **${message.guild.memberCount}** Members. The Server Was Created At **${message.guild.createdAt}** And The Region Of The Server Is **${message.guild.region}**`
        }
    });
   }
  }