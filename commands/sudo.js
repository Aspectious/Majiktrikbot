module.exports = {
    name: 'sudo',
    description: 'forces a user',
    execute(message, args){
        messgage = args.splice(2,args.length).join(" ");
        message.channel.send(messgage)
        .then((msg) => {
        })
    },
};