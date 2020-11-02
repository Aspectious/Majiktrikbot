const { execute } = require("./help");

module.exports = {
    name: 'commands',
    execute(message, args) {
        message.channel.send('Please refer to our help list, that we spent several weeks perfecting. `>help`')
    }
}