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
    if (message.content === '123test') {
        message.channel.send({embed: {
        color: 3447003,
        description: "A very simple Embed!"
}});
  	}
});

client.on('message', message => {
  if (message.content === 'ดูเกมลดราคา') {
const embed = new Discord.RichEmbed()
  .setTitle("ดูรายการเกมส์ที่กำลังลดราคา!")
  .setURL("https://store.steampowered.com/search/?specials=1&category1=998")
  .setColor(0x00AE86)
  .setDescription("คลิ๊กลิ้งค์ข้างบน เพื่อดูเกมส์ที่กำลังลดราคานะคะ ซื้อแล้วต้องชวนน้องเมดเล่นด้วยนะ! :blush: ")
  .setThumbnail("https://steamstore-a.akamaihd.net/public/shared/images/responsive/header_logo.png")
  message.channel.send({embed});
}});

client.login(process.env.BOT_TOKEN);
