// index.js
// 主进程

const TelegramBot = require("node-telegram-bot-api");

// 加载配置文件
const jsonData = require("./utils/config")();

// 创建bot进程
const bot = new TelegramBot(jsonData.TELEGRAM_BOT_TOKEN, { polling: true });

// 引入自动回复功能
if (jsonData.USE_KEYWORDS_AUTO_REPLY === true) {
  require("./functions/KeywordsAutoReply")(bot, jsonData.KEYWORDS_AUTO_REPLY);
}

// 引入欢迎新成员功能
if (jsonData.USE_WELCOME_NEW_GROUP_MEMBER === true) {
  require("./functions/WelcomeNewGroupMember")(bot, jsonData.WELCOME_NEW_GROUP_MEMBER.REPLY_CONTENT);
}
