const Discord = require('discord.js')
const fetch = require('node-fetch')
module.exports={
    name: 'meme',
    async execute(message,args){
        let data = await fetch('https://www.reddit.com/r/memes/random/.json')
        const content = await data.json();
        let memeUpvotes = content[0].data.children[0].data.ups;
        let memeDownvotes = content[0].data.children[0].data.downs;
        const embed = new Discord.MessageEmbed()
        .setTitle(content[0].data.children[0].data.title)
        .setImage(content[0].data.children[0].data.url)
        .setFooter(`👍 ${memeUpvotes} 👎 ${memeDownvotes} 💬 `)
        .setColor("#ffe05d")
        message.channel.send(embed) 
    }
}