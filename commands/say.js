module.exports = {
    name: 'say',
    execute(message,args){
        if(message.author.id === 637792429642088450) {
            if(message.content.startsWith('>say')) {
                message.channel.send(args.splice(1,args.length).join(" "))
                message.delete({reason:"you're a poopy head."})
            }
        }
    }
}