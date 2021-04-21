module.exports = {
    name: 'clearwarns',
    execute(message,args){
        const mention = message.mentions.members.first();
        if (!mention) {
            return message.channel.send('**No User Were Mentioned!**')
        }
        message.channel.send(`**All The Warning Were Cleared From ${mention}**`)
    }
}