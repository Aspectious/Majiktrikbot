# Majiktrikbot
Pure Discord Magic

What is it?
Majiktrikbot is a Project going on since late 2019 to help bring a fun, safe and secure multipurpose Discord bot. 
Majiktrikbot hopes to do the following:
- Make your life better
- Make your discord experience better
- and help make you, your community, and your admins safe and secure.


# NOTES FOR HOSTING

**ONLY** Use these commands:

npm run main

npm run dev

npm run deploy

**!** NOTE: USING __Node Index__ WILL NOT PROVIDE A TOKEN ANYMORE!


note how there are four js files:

- index
- main
- dev
- deploy

Index is the main bot file. It handles it normally, and requires a token when initatied.

Main is the file for main running. It reads a file called __"token.json"__ in the parent folder.

Dev is the Development bot script. It runs the dev bot. It also requires __"token.json"__.

Deploy is the deployment script. On the hosting site, it requires the env variable of __"TOKEN"__ in order to run.

### token.json FILE STRUCTURE

Example token.json:

{
    "BOT_TOKEN": "**MAJIK TOKEN GOES HERE**",
    "DEV_TOKEN": "**DEV BOT TOKEN GOES HERE**"
}

Use this wisely.