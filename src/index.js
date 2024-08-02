// index.js
// 主进程

const TelegramBot = require("node-telegram-bot-api");

// 加载配置文件
const jsonData = require("./utils/config");
const token = jsonData.TELEGRAM_BOT_TOKEN;

// 创建bot进程
const bot = new TelegramBot(token, { polling: true });

// 引入自动回复功能
if (jsonData.USE_KEYWORDS_AUTO_REPLY === true) {
  require("./functions/KeywordsAutoReply")(bot, jsonData.KEYWORDS_AUTO_REPLY);
}
