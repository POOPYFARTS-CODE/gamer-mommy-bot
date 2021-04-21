//require the dependencies
//distube
const DisTube = require('distube')
//discord.js
const Discord = require('discord.js');
//fs
const fs = require('fs')
//require the token config file
const config = require('./config.json')
//reuqire the prefix and the token via a json file (config.json) as stated above
// const {prefix,token} = require('./config.json')


//configuring client (client = bot profile)
const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandFolders = fs.readdirSync('./commands');
for (const folder of commandFolders) {
	const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const command = require(`./commands/${folder}/${file}`);
		client.commands.set(command.name, command);
	}
}
//files for commands
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));



client.distube = new DisTube(client, {searchSongs: false, emitNewSongOnly: true});
client.distube
.on("playSong", (message, queue, song) => message.channel.send(`Playing ${song.name}-${song.formattedDuration} Now! Requested By ${song.user}.`))
.on("addSong", (message, queue, song) => message.channel.send(`Added ${song.name} - ${song.formattedDuration} to the queue by ${song.user}`))





for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}
//client when ready (client = bot profile)
client.once('ready', () => {
    //logging when bot is ready
	console.log('Ready!');
    const status = "Videos Of Gamer Mommy! [Prefix: gm]"
    client.user.setActivity(status, {type: 'WATCHING'})
});
client.on('message', message =>{
    //args system
    //if command starts with the ${prefix} (?) or has the bot tagged in the message it will returm
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    //triming args (messages conetent beside prefix)
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    //defineing the trimed args as the command
    const commandName = args.shift().toLowerCase();
    
    //main code for commands
    const command = client.commands.get(commandName)
        || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
    if (!command) return;
    try{
        command.execute(message,client, args);
    }catch (error){
        console.log(error)
        message.react('👎︎')
        message.reply('There Was Error Running Your Command!')
    }
});
//bot login
client.login(process.env.token);                   
