module.exports = {
    name: "userinfo",
    description: "Shows The user Info",
    execute(message, args){
      let username = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]);
      message.channel.send({
        embed: {
          color: '#ffe05d',
          title: `**User Info**`,
          description: `The Metnioned Account Username Is **${username}** Thier Account Was Created At **${username.user.createdAt}** And ID **${username.id}**`
        }
    });
   }
  }