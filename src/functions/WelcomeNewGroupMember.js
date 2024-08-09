// WelcomeNewGroupMember.js
// 回复正则表达式匹配关键词

module.exports = function (bot, reply) {
  bot.on("new_chat_members", (msg) => {
    bot.sendMessage(msg.chat.id, reply);
  });
};
