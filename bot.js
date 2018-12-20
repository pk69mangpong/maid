const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'น้องเมด') {
    	message.reply('คะ...นายท่าน...น้องเมดยินดีรับใช้ค่ะ');
  	}
});

client.on('guildMemberAdd', member => {
    member.guild.channels.get('524513951736922125').send("ยินดีต้อนรับค่ะ คุณ *" + member + "* ขอให้สนุกกับการเล่นเกมส์นะคะ :kissing_closed_eyes: "); 
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
