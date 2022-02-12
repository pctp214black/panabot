"use strict";

require("dotenv").config();
const { Client, Intents } = require("discord.js");

console.log("Here we go again 🕶");

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});
const TOKEN = process.env.TOKEN;

client.once("ready", () => {
  console.log("Ready! 🤖");
});

const MESSAGE_RESPONSE=["MUNDO","Como estas?","Que tal?"];

const CHANNEL = process.env.BOTCHANNEL;
function gotMessage(message){
  console.log("New Message!");

  if(message.channel.id===CHANNEL && message.content.match(/([a-z])ola+/) && !message.author.bot){
    let randomIndex=Math.floor(Math.random()*MESSAGE_RESPONSE.length);
    message.channel.send(MESSAGE_RESPONSE[randomIndex]);//Simplemente contesta
  }
}

client.on("messageCreate",gotMessage);
// Login to Discord with your client's token
client.login(TOKEN);

