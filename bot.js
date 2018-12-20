const Discord = require('discord.js');
const { Client, RichEmbed } = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('guildMemberAdd', member => {
    member.guild.channels.get('524513951736922125').send("ยินดีต้อนรับค่ะ คุณ *" + member + "* ขอให้สนุกกับการเล่นเกมส์นะคะ :kissing_closed_eyes: "); 
});

client.on('message', message => {
    if (message.content === 'น้องเมด') {
    	message.reply('คะ...นายท่าน...น้องเมดยินดีรับใช้ค่ะ');
  	}
});

client.on('message', message => {
  // If the message is "how to embed"
  if (message.content === 'how to embed') {
    // We can create embeds using the MessageEmbed constructor
    // Read more about all that you can do with the constructor
    // over at https://discord.js.org/#/docs/main/stable/class/RichEmbed
    const embed = new RichEmbed()
      // Set the title of the field
      .setTitle('A slick little embed')
      // Set the color of the embed
      .setColor(0xFF0000)
      // Set the main content of the embed
      .setDescription('Hello, this is a slick embed!');
    // Send the embed to the same channel as the message
    message.channel.send(embed);
  }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
