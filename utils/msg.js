const Discord = require("discord.js");
const config = require("../config.json")
const fs = require("fs");
const color = require("./colors.json")

module.exports.success = (message, msg) => {
    let embed = new Discord.RichEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL)
    .setColor('green')
    .setTitle(msg)

    message.channel.send(embed);
}

module.exports.error = (message, error) => {
    let embed = new Discord.RichEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL)
    .setColor('GREEN')
    .setTitle("AH! There was a little problem ...")
    .setDescription(error)

    message.channel.send(embed);
}

module.exports.info = (message, msg) => {
    let embed = new Discord.RichEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL)
    .setColor('GREEN')
    //.setTitle("Thi")
    .setTitle(msg)

    message.channel.send(embed);
}

module.exports.aa = (message, msg) => {
    let embed = new Discord.RichEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL)
    .setTitle("Commandes!")
    .setColor(color.blue)

    .setDescription("Les commandes du bot!")
    .addField(":bulb: Général", 
    "**`r!rainbow`** - Pouvoir Arc-en-ciel!\n" + 
    "**`r!ping`** - POurquoi ça lague???")

    .addField(":skull: Commandes pour le proprio du bot :wink: :lock:" ,
    "**`r!eval`** - Super Code!\n" +
    "**`r!createInvite`** - Créé des invitations pour les serveurs!")
        
    .setColor(color.blue)

    message.channel.send(embed);
}
