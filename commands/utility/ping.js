module.exports={
    name: 'ping',
    execute(message,client,args){
        message.channel.send('Loading data').then (async (msg) =>{
            msg.delete()
            message.channel.send(`🏓Latency is ${msg.createdTimestamp - message.createdTimestamp}ms. API Latency is **${Math.round(client.ws.ping)}ms**`);
          })   
    }
}