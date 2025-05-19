# Telegram-Group-Bot

这是一个基于 Node.js 构建的 Telegram Bot，支持关键词自动回复、新成员欢迎等功能。

## 快速开始

1. 安装依赖：

```bash
npm install
```

2. 配置 Bot：

复制并编辑配置文件：

```bash
cp example.config.json config.json
```

编辑 `config.json`，填写必要信息（如 `TELEGRAM_BOT_TOKEN` 和 `TELEGRAM_BOT_ADMIN_ID`）。

3. 启动 Bot：

```bash
node src/index.js
```

## 功能特性

* 支持关键词正则匹配自动回复
* 新成员入群欢迎消息
* 可使用占位符动态插入用户信息

## 配置说明文档

[查看完整配置文档](https://github.com/VanVodkaer/Telegram-Group-Bot/blob/main/doc/%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E8%AF%B4%E6%98%8E.md)
