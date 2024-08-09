// KeywordsAutoReply.js
// 回复正则表达式匹配关键词

module.exports = function (bot, reply) {
  for (let key in reply) {
    const regexPatterns = new RegExp(key);
    bot.onText(regexPatterns, (msg) => {
      bot.sendMessage(msg.chat.id, reply[key]);
    });
  }
};
