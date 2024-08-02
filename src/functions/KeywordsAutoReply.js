// KeywordsAutoReply.js
// 回复正则表达式匹配关键词

module.exports = function (bot, reply) {
  for (let key in reply) {
    const regexPatterns = new RegExp(key);
    bot.onText(regexPatterns, (msg) => {
      const chatId = msg.chat.id;
      bot.sendMessage(chatId, reply[key]);
    });
  }
};
