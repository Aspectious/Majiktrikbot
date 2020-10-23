module.exports = {
    name: 'hmpg',
    execute(message, args) {
        message.channel.send('', {files: '../lib/images/downloadwww.gif'}).catch(err => {message.channel.send('Error: could not download Internet (23,993,564,998 MB / 23993.5 TB) on Drive C:/ (1.7TB / 2TB). Warning: Disc C:/ is Full. Please insert a drive into A:/')})
    }
}