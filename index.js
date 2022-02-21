const { Client, Intents } = require("discord.js");
require("dotenv").config();

const generateImage = require("./generateImage");

const testChannelId = "701159226248134747"; // currently linked to bot test channel

const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_PRESENCES,
  ],
});

client.on("ready", async (member) => {
  client.user.setActivity(`with code 💣 `, { type: "PLAYING" });
  // console.log(client.user.id);
  console.log(`Logged in as ${client.user.tag}`);
});

client.on("presenceUpdate", (oldPresence, newPresence) => {
  console.log(
    `Old Presnce: ${oldPresence} | New Presnce: ${newPresence}`
  );
});

client.on("messageCreate", (message) => {
  if (message.content == "lit") {
    message.react(message.guild.emojis.cache.get("705579386962968648"));
  }
});

// client.on("guildMemberAdd", async (member) => {
//   const img = await generateImage(message);
//   member.guild.channels.cache
//     .get(testChannelId)
//     .send({ content: `<@${member.id}> Welcome to the server`, files: [img] });
// });

client.login(process.env.TOKEN);
