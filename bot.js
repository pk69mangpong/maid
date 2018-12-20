const Discord = require('discord.js');
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
  if (message.content === 'test') {
  message.channel.send({embed: {
  color: 3447003,
  title: "This is TEST embed",
  description: "You can put [masked links](http://google.com) inside of rich embeds."
  }});
}});

client.login(process.env.BOT_TOKEN);
