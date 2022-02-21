const Canvas = require("canvas");
const Discord = require("discord.js");

const background = "https://i.imgur.com/k4PRQMP.png";

const dim = {
  height: 675,
  width: 1200,
  margin: 50,
};

const generateImage = async () => {

  const canvas = Canvas.createCanvas(dim.width, dim.height);
  const ctx = canvas.getContext("2d");

  // draw bg
  const backimg = await Canvas.loadImage(background);
  ctx.drawImage(backimg, 0, 0);

  const attachment = new Discord.MessageAttachment(canvas.toBuffer(), "jsr.png")
  return attachment
};

module.exports = generateImage