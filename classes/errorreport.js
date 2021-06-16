const fs = require('fs');
const colors = require('colors');
module.exports = class errorreport {

constructor(error) {
    this.error = Error;
    if (error.type = undefined) throw "Error Reporter Cannot Report Things that are not Errors!"
    this.reporterVersion = "v1.002.1928"
    this.TOE = new Date()
    this.log = `// IAN Errorlogger ${this.reporterVersion} error report //`
    if (error.fileName == undefined) {
        this.log = this.log + `\nError of type ${error.name} Occured while runnning Client on ${this.TOE}.\nNOTICE: This error has no host filename.`
    } else {
        this.log = this.log + `\nError ${error.name} Occured in file ${error.fileName} on ${this.TOE}`
        this.log = this.log + `\nError occured on line ${error.lineNumber}, column ${error.columnNumber}`
    }
        this.log = this.log + `\nError Message Reads out:`
        this.log = this.log + `\n${error.message}`
        this.log = this.log + `\nFull Error Message Reads out:`
        this.log = this.log + `\n${error}`
        this.log = this.log + `\nRecommended Action: Cut off error that gave this message or suppress error to help with efficiency`
    fs.appendFile(`./logs/errorreport-${this.printTimeStamp()}.txt`, this.log, (error) => {console.log(error)})
    return this.log;
}
printTimeStamp() {
return `${this.TOE.getMonth()}`
+ `.`
+ this.TOE.getDay()
+ `.`
+ this.TOE.getFullYear()
+ `-`
+ this.TOE.getHours()
+ `.`
+ this.TOE.getMinutes()
+ `.`
+ this.TOE.getSeconds()
+ `.`
+ this.TOE.getMilliseconds()
}
async recommendAction(error) {
var solution = `#0001 REPAIR CODE`
return solution;
}
fetchLogFile() {
return `./logs/errorreport-${this.printTimeStamp()}.txt`
}
}