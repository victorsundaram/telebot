const TeleBot = require('telebot');
const bot = new TeleBot('639007544:AAHnPdO8nXhohDd79HY5GYecli2ABYMxwrE');

bot.on('text', (msg) => msg.reply.text(msg.text));

bot.start();

bot.on(['/start', '/hello'], (msg) => msg.reply.text('Welcome!'));

bot.on('sticker', (msg) => {
    return msg.reply.sticker('http://i.imgur.com/VRYdhuD.png', { asReply: true });
});
