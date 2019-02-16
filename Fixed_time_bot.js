require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();
const {
    TOKEN,
    TEXT_CHANNEL_ID,
    CHANNEL_ID
} = process.env;
const cron = require('cron');
const schedule = require('node-schedule');

client.on('ready', () => {
    console.log('準備完了');
});



var job = schedule.scheduleJob('00 19 * * 3', function() {
    const textChannel = client.channels.get(TEXT_CHANNEL_ID);
    const general = textChannel.children.get(CHANNEL_ID);
    general.send('test');


});

client.login(TOKEN);