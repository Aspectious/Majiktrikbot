module.exports = {
    name: 'askew',
    execute(message, args) {
        message.channel.send('', {files: ['./lib/images/askew.png']})
    }
}