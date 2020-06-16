const { Client, RichEmbed } = require("discord.js");
var { Util } = require('discord.js');
const {TOKEN, YT_API_KEY, prefix, devs} = require('./config')
const client = new Client({ disableEveryone: true})
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const convert = require("hh-mm-ss")
const fetchVideoInfo = require("youtube-info");
const botversion = require('./package.json').version;
const simpleytapi = require('simple-youtube-api')
const moment = require("moment");
const fs = require('fs');
const util = require("util")
const gif = require("gif-search");
const opus = require("node-opus");
const ms = require("ms");
const jimp = require("jimp");
const { get } = require('snekfetch');
const guild = require('guild');
const dateFormat = require('dateformat');//npm i dateformat
const YouTube = require('simple-youtube-api');
const youtube = new YouTube('AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8');
const hastebins = require('hastebin-gen');
const getYoutubeID = require('get-youtube-id');
const yt_api_key = "AIzaSyDeoIH0u1e72AtfpwSKKOSy3IPp2UHzqi4";
const pretty = require("pretty-ms");
client.login(TOKEN);
const queue = new Map();
var table = require('table').table
const Discord = require('discord.js');
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
 

 
console.log("This Bot onlline");
client.on("message", message => {

            if (message.content.startsWith(prefix + "bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`The number of members received :\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\``); 
 message.delete(); 
};     
});

client.on("message", message => {
  if (message.content.startsWith("+link")) {
    message.channel
      .createInvite({
        thing: true,
        maxUses: 5,
        maxAge: 3600
      })
      .then(invite => message.author.send(invite.url));
    message.author.send(`**Link ends in:  1 hour**
**Link can be used:  5 times**
`)
   return message.channel.send(`<@${message.author.id}>**The link sent to your DM**`)

  }

});

client.on("ready", () => {
  console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
  console.log(`Servers : ${client.guilds.size} | Members ${client.users.size}`);
  client.user.setActivity(`MPG SECURITY`,"http://twitch.tv/Rad-Bot");
  client.user.setStatus("dnd");
}); 