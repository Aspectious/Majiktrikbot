module.exports = {
    name: 'say',
    execute(message,args){
        message.channel.send(args)
    }
}