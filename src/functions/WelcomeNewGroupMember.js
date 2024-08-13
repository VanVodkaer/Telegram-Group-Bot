// WelcomeNewGroupMember.js
// 回复正则表达式匹配关键词

module.exports = function (bot, reply) {
  bot.on("new_chat_members", (msg) => {
    reply = require("../utils/placeholder")(msg.new_chat_member, reply);
    bot.sendMessage(msg.chat.id, reply);
  });
};
