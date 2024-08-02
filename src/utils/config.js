// config.js
// 加载配置文件

const fs = require("fs");
const path = require("path");
const { exit } = require("process");

const configPath = path.resolve(__dirname, "../../config.json");

module.exports = function LoadConfig() {
  try {
    jsonData = JSON.parse(fs.readFileSync(configPath, "utf8"));
    return jsonData;
  } catch (err) {
    console.error("读取配置文件时出现错误:", err);
    exit(1);
  }
};
