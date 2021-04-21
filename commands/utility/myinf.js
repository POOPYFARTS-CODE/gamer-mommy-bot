module.exports = {
    name: "myinfo",
    description: "Shows The uSer Info",
    execute(message, args){
      message.channel.send({
        embed: {
          color: '#ffe05d',
          title: `**Your Info**`,
          description: `Your User Name Is **${message.author.username}** Your Account Was Created At **${message.author.createdAt}** And ID **${message.author.id}**`
        }
    });
   }
  }