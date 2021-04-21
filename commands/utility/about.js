const Discord = require('discord.js');

module.exports={
    name: 'aboutgamermommy',
    aliases: ["abtgm"],
    execute(message,args){
        const embed = new Discord.MessageEmbed()
        .setTitle('About Gamer Mommy')
        .setImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSepfHG3t0BWLN7cxlLG3At01iE1d0ZZgAzEw&usqp=CAU')
        .setDescription('```Example Text``` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')
        .setColor('#ffe05d')
        message.channel.send(embed)
    }
}