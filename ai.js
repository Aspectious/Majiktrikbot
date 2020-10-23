module.exports = {
    start: function (message) {
        if (message.content.toLowerCase().includes('fuck' || 'shit' || 'ass' || 'bitch' || 'cunt')) {
        message.reply(`Thats Not Nice. I'm Going to go ahead and delete that now. `)
        message.delete()
        return
        }
        if (message.content.toLowerCase().includes('hello') || message.content.toLowerCase().includes('Hola') || message.content.toLowerCase().includes('henlo') || message.content.toLowerCase().includes('helo') || message.content.toLowerCase().includes('hi') || message.content.toLowerCase().includes('hey')) {
        message.channel.send('Hi!')
        }
        if (message.content.toLowerCase().includes('how are you?' || '. you?')) {
        message.channel.send(`I'm Feeling Rather Energetic Today.`)
        }
        

    }
}  
